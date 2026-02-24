[**synstate**](../../README.md)

***

[synstate](../../README.md) / core/create/counter

# core/create/counter

## Functions

### counter()

> **counter**(`intervalMilliSeconds`, `startManually?`): [`CounterObservable`](../types/observable-family.md#counterobservable)

Defined in: [core/create/counter.mts:48](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/create/counter.mts#L48)

Creates an observable that emits incremental numbers at a specified interval.
Starts with 0 immediately after subscription, then emits 1, 2, 3, ... every interval.

#### Parameters

##### intervalMilliSeconds

`number`

The interval duration in milliseconds

##### startManually?

`boolean`

If true, waits for manual start (default: false)

#### Returns

[`CounterObservable`](../types/observable-family.md#counterobservable)

An observable that emits sequential numbers

#### Example

```ts
//  Timeline:
//
//  Time(s)   0     1     2     3     4     5
//  tick$     0     1     2     3     4     5     ...
//
//  Explanation:
//  - counter emits incrementing numbers at specified intervals
//  - Starts at 0 and continues indefinitely
//  - Useful for periodic tasks or animations

const tick$ = counter(100);

const valueHistory: number[] = [];

const subscription = tick$.subscribe((count) => {
  valueHistory.push(count);
});

await new Promise((resolve) => {
  setTimeout(resolve, 350);
});

subscription.unsubscribe();

assert.isTrue(Arr.isArrayAtLeastLength(valueHistory, 3));

assert.deepStrictEqual(valueHistory[0], 0);

assert.deepStrictEqual(valueHistory[1], 1);

assert.deepStrictEqual(valueHistory[2], 2);
```
