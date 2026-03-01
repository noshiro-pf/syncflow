# How SynState Solved the Glitch?

## What Is a Glitch?

In reactive programming, a **glitch** is a phenomenon where derived values temporarily enter **inconsistent intermediate states** during propagation. When a single source value changes, Observables that depend on it may update one at a time rather than all at once. If a downstream Observable depends on multiple upstream values that share a common ancestor, it can observe a state where some inputs have already updated while others have not — producing a value that should never logically exist.

## A Simple Example

Consider the following Observable graph:

```txt
counterObservable (source)
    ├──────────────────────────┐
    │                          │
    ▼                          ▼
multipliedCounter          counterObservable
 (= counter × 1000)           (passed through)
    │                          │
    └───────────┬──────────────┘
                ▼
          combine([multipliedCounter, counterObservable])
                │
                ▼
              sum
         (= multiplied + counter)
```

In code:

```tsx
import { collectToArray, combine, counter, map, take } from 'synstate';

const counterObservable = counter(1000 /* ms */);
// 0, 1, 2, 3, ...

const multipliedCounter = counterObservable.pipe(map((count) => count * 1000));
// 0, 1000, 2000, 3000, ...

const sum = combine([multipliedCounter, counterObservable]).pipe(
    map(([a, b]) => a + b),
);
// 0, 1001, 2002, 3003, ...

const resultPromise = collectToArray(sum.pipe(take(5)));

counterObservable.start();

const result = await resultPromise;

assert.deepStrictEqual(result, [0, 1001, 2002, 3003, 4004]);
```

Both `multipliedCounter` and the second input to `combine` originate from the same source (`counterObservable`). Whenever `counterObservable` emits a new value, both inputs to `combine` should update **together** — and `sum` should always equal `counter * 1001`.

## What Happens in RxJS (Glitch)

In RxJS, `combineLatest` propagates a new value **as soon as any one input changes**. When `counterObservable` emits a new value, the update propagates through the graph in a depth-first manner. Since `multipliedCounter` subscribes to `counterObservable` before `combineLatest` does, the typical sequence when the counter changes from `0` to `1` is:

1. `counterObservable` emits `1`
2. `multipliedCounter` (which subscribes to `counterObservable`) recalculates to `1000`
3. `combineLatest` sees that `multipliedCounter` (its first input) changed to `1000`, but its second input (`counterObservable`) is still `0` (the old value)
4. `combineLatest` emits `[1000, 0]` → `sum` emits **`1000`** — a **glitch**
5. `combineLatest`'s own subscription to `counterObservable` fires with `1`
6. `combineLatest` emits `[1000, 1]` → `sum` emits `1001` — correct

This pattern repeats every time the counter increments:

```txt
counter:     0     1             2             3
             │     │             │             │
sum (RxJS):  0     1000, 1001   2001, 2002   3002, 3003   ...
                   ↑             ↑             ↑
                   glitch        glitch        glitch
```

The full output sequence of `sum` in RxJS is:

```txt
0, 1000, 1001, 2001, 2002, 3002, 3003, ...
```

The values `1000`, `2001`, `3002`, ... are **glitches** — they represent states where `multipliedCounter` has already updated but `counterObservable` has not yet propagated to `combineLatest`. These values should never exist logically (`sum` should always be a multiple of `1001`), yet they are emitted to subscribers, potentially causing incorrect UI rendering, invalid API calls, or subtle bugs.

You can verify this behavior by running the RxJS sample code in [`01-simple-glitch-example.rxjs.mts`](../samples/how-synstate-solved-the-glitch/01-simple-glitch-example.rxjs.mts).

```tsx
import {
    combineLatest,
    interval,
    lastValueFrom,
    map,
    take,
    toArray,
} from 'rxjs';

const counterObservable = interval(100);
// 0, 1, 2, 3, ...

const multipliedCounter = counterObservable.pipe(map((count) => count * 1000));
// 0, 1000, 2000, 3000, ...

const sum = combineLatest([multipliedCounter, counterObservable]).pipe(
    map(([a, b]) => a + b),
);
// 0, 1000, 1001, 2001, 2002, 3002, 3003, ...

const result = await lastValueFrom(sum.pipe(take(7), toArray()));

assert.deepStrictEqual(result, [0, 1000, 1001, 2001, 2002, 3002, 3003]);
```

### Timeline

| Step | `counterObservable` | `multipliedCounter` | `sum` (`multiplied + counter`) | Consistent? |
| ---: | ------------------: | ------------------: | -----------------------------: | :---------: |
|    1 |                   0 |                   0 |                        **0** ✓ |     Yes     |
|    2 |                   1 |                1000 |                     **1000** ✗ |   Glitch    |
|    3 |                   1 |                1000 |                     **1001** ✓ |     Yes     |
|    4 |                   2 |                2000 |                     **2001** ✗ |   Glitch    |
|    5 |                   2 |                2000 |                     **2002** ✓ |     Yes     |
|    6 |                   3 |                3000 |                     **3002** ✗ |   Glitch    |
|    7 |                   3 |                3000 |                     **3003** ✓ |     Yes     |

## What Happens in MobX (Glitch-Free)

MobX takes a fundamentally different approach from RxJS. While RxJS is push-based (values are eagerly propagated to subscribers as soon as they change), MobX's `computed` values are **pull-based and lazily evaluated** — they are only recomputed when accessed.

When `counter` changes:

1. `multipliedCounter` and `sum` are both marked as "possibly stale"
2. MobX schedules the `reaction` (subscriber) to run after the current action completes
3. When the reaction runs, it accesses `sum`, which accesses `multipliedCounter`
4. `multipliedCounter` is recomputed from the already-updated `counter`
5. `sum` is then computed with both up-to-date values

Because `computed` values are lazily evaluated at the time of access, MobX never observes an inconsistent intermediate state in this scenario.

You can verify this behavior by running the MobX sample code in [`01-simple-glitch-example.mobx.mts`](../samples/how-synstate-solved-the-glitch/01-simple-glitch-example.mobx.mts).

```tsx
import { computed, observable, reaction, runInAction } from 'mobx';

const state = observable({ counter: 0 });

const multipliedCounter = computed(() => state.counter * 1000);
// 0, 1000, 2000, 3000, ...

const sum = computed(() => multipliedCounter.get() + state.counter);
// 0, 1001, 2002, 3003, ... (glitch-free)

const valueHistory: number[] = [];

reaction(
    () => sum.get(),
    (value) => {
        valueHistory.push(value);
    },
    { fireImmediately: true },
);

for (let i = 1; i <= 4; i++) {
    runInAction(() => {
        state.counter = i;
    });
}

assert.deepStrictEqual(valueHistory, [0, 1001, 2002, 3003, 4004]);
```

### Comparison

| Library  | Approach                 | Glitch-Free? | Output                                  |
| :------- | :----------------------- | :----------: | :-------------------------------------- |
| RxJS     | Push-based (eager)       |      No      | `0, 1000, 1001, 2001, 2002, 3002, 3003` |
| MobX     | Pull-based (lazy)        |     Yes      | `0, 1001, 2002, 3003, 4004`             |
| SynState | Push-based (glitch-free) |     Yes      | `0, 1001, 2002, 3003, 4004`             |

MobX achieves glitch-free behavior through lazy evaluation of `computed` values. SynState achieves the same result with a push-based architecture — values are eagerly propagated, but the propagation is ordered so that all inputs to a combinator are updated before the combinator itself evaluates.

## What Happens in SynState (Glitch-Free)

SynState solves this by ensuring that **all derived values update atomically within a single propagation cycle**. When `counterObservable` emits a new value, SynState does not immediately fire `combine`. Instead, it first propagates the update through the entire graph, updating `multipliedCounter` and marking `counterObservable`'s new value — and only after all inputs to `combine` are up-to-date does it evaluate `combine` and emit to `sum`.

The output of `sum` in SynState is:

```txt
0, 1001, 2002, 3003, 4004, ...
```

No intermediate states. No glitches. Every value emitted to subscribers is consistent.

### Timeline

| Step | `counterObservable` | `multipliedCounter` | `sum` (`multiplied + counter`) | Consistent? |
| ---: | ------------------: | ------------------: | -----------------------------: | :---------: |
|    1 |                   0 |                   0 |                        **0** ✓ |     Yes     |
|    2 |                   1 |                1000 |                     **1001** ✓ |     Yes     |
|    3 |                   2 |                2000 |                     **2002** ✓ |     Yes     |
|    4 |                   3 |                3000 |                     **3003** ✓ |     Yes     |
