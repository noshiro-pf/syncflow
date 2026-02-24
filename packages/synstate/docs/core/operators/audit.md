[**synstate**](../../README.md)

***

[synstate](../../README.md) / core/operators/audit

# core/operators/audit

## Functions

### audit()

> **audit**\<`A`\>(`milliSeconds`): [`KeepInitialValueOperator`](../types/observable.md#keepinitialvalueoperator)\<`A`, `A`\>

Defined in: [core/operators/audit.mts:70](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/operators/audit.mts#L70)

Ignores source values for duration milliseconds, then emits the most recent value from the source Observable, then repeats this process.

Unlike `throttle` which emits the first value, `audit` emits the last value.

#### Type Parameters

##### A

`A`

The type of values from the source

#### Parameters

##### milliSeconds

`number`

The audit time window in milliseconds

#### Returns

[`KeepInitialValueOperator`](../types/observable.md#keepinitialvalueoperator)\<`A`, `A`\>

An operator that audits emissions from the observable

#### Example

```ts
//  Timeline (1000ms audit):
//
//  Time(ms)  0    100   200   300   400   ...   1000  1100
//  input$    e1   e2    e3    e4    e5
//  audited$                                      e5 (emitted at end of window)
//            |-------1000ms window------>        ^
//
//  Explanation:
//  - audit emits the LAST value received during each time window
//  - Unlike throttle (which emits the FIRST value), audit emits the LAST
//  - At 0-1000ms: e1-e5 are received
//  - At 1000ms: e5 (the last value in the window) is emitted
//  - Useful when you want the most recent value after a burst of events

const input$ = source<number>();

const audited$ = input$.pipe(audit(200));

const valueHistory: number[] = [];

audited$.subscribe((value) => {
  valueHistory.push(value);
});

input$.next(1);

input$.next(2);

input$.next(3);

assert.deepStrictEqual(valueHistory, []);

await new Promise((resolve) => {
  setTimeout(resolve, 250);
});

assert.deepStrictEqual(valueHistory, [3]);

input$.next(4);

input$.next(5);

await new Promise((resolve) => {
  setTimeout(resolve, 250);
});

assert.deepStrictEqual(valueHistory, [3, 5]);
```
