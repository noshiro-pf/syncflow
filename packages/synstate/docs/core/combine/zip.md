[**synstate**](../../README.md)

***

[synstate](../../README.md) / core/combine/zip

# core/combine/zip

## Functions

### zip()

> **zip**\<`OS`\>(`parents`): [`ZipObservableRefined`](../types/observable-family.md#zipobservablerefined)\<`OS`\>

Defined in: [core/combine/zip.mts:67](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/combine/zip.mts#L67)

Combines multiple observables by pairing their emissions by index.
Waits for all sources to emit their nth value before emitting the nth tuple.
Completes when any source completes.

#### Type Parameters

##### OS

`OS` *extends* readonly \[[`Observable`](../types/observable.md#observable)\<`unknown`\>, [`Observable`](../types/observable.md#observable)\<`unknown`\>\]

Tuple type of source observables

#### Parameters

##### parents

`OS`

Array of observables to zip

#### Returns

[`ZipObservableRefined`](../types/observable-family.md#zipobservablerefined)\<`OS`\>

A zipped observable emitting tuples of values

#### Example

```ts
//  Timeline:
//
//  letters$  'a'       'b'       'c'
//  numbers$  1         2         3
//  zipped$   ['a',1]   ['b',2]   ['c',3]
//
//  Explanation:
//  - zip pairs values by their index from multiple sources
//  - Waits for all sources to emit at the same index
//  - Completes when any source completes

const [letters$, setLetter] = createState<string>('a');

const [numbers$, setNumber] = createState<number>(1);

const zipped$ = zip([letters$, numbers$]);

const valueHistory: (readonly [string, number])[] = [];

zipped$.subscribe(([letter, num]) => {
  valueHistory.push([letter, num]);
});

for (const letter of ['b', 'c']) {
  setLetter(letter);
}

for (const num of [2, 3]) {
  setNumber(num);
}

assert.deepStrictEqual(valueHistory, [
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
```
