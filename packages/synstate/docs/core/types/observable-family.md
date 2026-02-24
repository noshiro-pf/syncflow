[**synstate**](../../README.md)

***

[synstate](../../README.md) / core/types/observable-family

# core/types/observable-family

## Type Aliases

### AuditOperatorObservable

> **AuditOperatorObservable**\<`A`\> = [`AsyncChildObservable`](observable.md#asyncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:228](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L228)

#### Type Parameters

##### A

`A`

***

### CombineObservable

> **CombineObservable**\<`A`\> = `SynStateInternals.CombineObservableImpl`\<`A`\>

Defined in: [core/types/observable-family.mts:156](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L156)

#### Type Parameters

##### A

`A` *extends* [`NonEmptyUnknownList`](types.md#nonemptyunknownlist)

***

### CombineObservableRefined

> **CombineObservableRefined**\<`OS`\> = `SynStateInternals.CombineObservableRefinedImpl`\<`OS`\>

Defined in: [core/types/observable-family.mts:159](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L159)

#### Type Parameters

##### OS

`OS` *extends* `NonEmptyArray`\<[`Observable`](observable.md#observable)\<`unknown`\>\>

***

### CounterObservable

> **CounterObservable** = `Readonly`\<\{ `start`: () => [`CounterObservable`](#counterobservable); \}\> & [`RootObservable`](observable.md#rootobservable)\<`SafeUint`\>

Defined in: [core/types/observable-family.mts:34](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L34)

***

### DebounceOperatorObservable

> **DebounceOperatorObservable**\<`A`\> = [`AsyncChildObservable`](observable.md#asyncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:230](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L230)

#### Type Parameters

##### A

`A`

***

### FilterOperatorObservable

> **FilterOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:214](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L214)

#### Type Parameters

##### A

`A`

***

### FromPromiseObservable

> **FromPromiseObservable**\<`A`, `E`\> = [`RootObservable`](observable.md#rootobservable)\<`Result`\<`A`, `E`\>\>

Defined in: [core/types/observable-family.mts:26](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L26)

#### Type Parameters

##### A

`A`

##### E

`E` = `unknown`

***

### FromSubscribableObservable

> **FromSubscribableObservable**\<`A`, `E`\> = [`RootObservable`](observable.md#rootobservable)\<`Result`\<`A`, `E`\>\>

Defined in: [core/types/observable-family.mts:30](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L30)

#### Type Parameters

##### A

`A`

##### E

`E` = `unknown`

***

### InitializedSourceObservable

> **InitializedSourceObservable**\<`A`\> = `Readonly`\<\{ `next`: (`value`) => `void`; \}\> & [`InitializedRootObservable`](observable.md#initializedrootobservable)\<`A`\>

Defined in: [core/types/observable-family.mts:16](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L16)

#### Type Parameters

##### A

`A`

***

### MapOperatorObservable

> **MapOperatorObservable**\<`A`, `B`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`B`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:177](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L177)

#### Type Parameters

##### A

`A`

##### B

`B`

***

### MergeMapOperatorObservable

> **MergeMapOperatorObservable**\<`A`, `B`\> = [`AsyncChildObservable`](observable.md#asyncchildobservable)\<`B`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:240](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L240)

#### Type Parameters

##### A

`A`

##### B

`B`

***

### MergeObservable

> **MergeObservable**\<`A`\> = `SynStateInternals.MergeObservableImpl`\<`A`\>

Defined in: [core/types/observable-family.mts:170](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L170)

#### Type Parameters

##### A

`A` *extends* [`NonEmptyUnknownList`](types.md#nonemptyunknownlist)

***

### MergeObservableRefined

> **MergeObservableRefined**\<`OS`\> = `SynStateInternals.MergeObservableRefinedImpl`\<`OS`\>

Defined in: [core/types/observable-family.mts:173](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L173)

#### Type Parameters

##### OS

`OS` *extends* `NonEmptyArray`\<[`Observable`](observable.md#observable)\<`unknown`\>\>

***

### PairwiseOperatorObservable

> **PairwiseOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<readonly \[`A`, `A`\], readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:179](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L179)

#### Type Parameters

##### A

`A`

***

### ScanOperatorObservable

> **ScanOperatorObservable**\<`A`, `B`\> = [`InitializedSyncChildObservable`](observable.md#initializedsyncchildobservable)\<`B`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:51](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L51)

#### Type Parameters

##### A

`A`

##### B

`B`

***

### SkipIfNoChangeOperatorObservable

> **SkipIfNoChangeOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:216](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L216)

#### Type Parameters

##### A

`A`

***

### SkipUntilOperatorObservable

> **SkipUntilOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:199](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L199)

#### Type Parameters

##### A

`A`

***

### SkipWhileOperatorObservable

> **SkipWhileOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:194](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L194)

#### Type Parameters

##### A

`A`

***

### SourceObservable

> **SourceObservable**\<`A`\> = `Readonly`\<\{ `next`: (`value`) => `void`; \}\> & [`RootObservable`](observable.md#rootobservable)\<`A`\>

Defined in: [core/types/observable-family.mts:21](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L21)

#### Type Parameters

##### A

`A`

***

### SwitchMapOperatorObservable

> **SwitchMapOperatorObservable**\<`A`, `B`\> = [`AsyncChildObservable`](observable.md#asyncchildobservable)\<`B`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:235](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L235)

#### Type Parameters

##### A

`A`

##### B

`B`

***

### TakeUntilOperatorObservable

> **TakeUntilOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:189](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L189)

#### Type Parameters

##### A

`A`

***

### TakeWhileOperatorObservable

> **TakeWhileOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:184](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L184)

#### Type Parameters

##### A

`A`

***

### ThrottleOperatorObservable

> **ThrottleOperatorObservable**\<`A`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<`A`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:221](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L221)

#### Type Parameters

##### A

`A`

***

### TimerObservable

> **TimerObservable** = `Readonly`\<\{ `start`: () => [`TimerObservable`](#timerobservable); \}\> & [`RootObservable`](observable.md#rootobservable)\<`0`\>

Defined in: [core/types/observable-family.mts:39](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L39)

***

### WithBufferedFromOperatorObservable

> **WithBufferedFromOperatorObservable**\<`A`, `B`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<readonly \[`A`, readonly `B`[]\], readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:209](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L209)

#### Type Parameters

##### A

`A`

##### B

`B`

***

### WithCurrentValueFromOperatorObservable

> **WithCurrentValueFromOperatorObservable**\<`A`, `B`\> = [`SyncChildObservable`](observable.md#syncchildobservable)\<readonly \[`A`, `B`\], readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:204](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L204)

#### Type Parameters

##### A

`A`

##### B

`B`

***

### WithInitialValueOperatorObservable

> **WithInitialValueOperatorObservable**\<`A`, `I`\> = [`InitializedSyncChildObservable`](observable.md#initializedsyncchildobservable)\<`A` \| `I`, readonly \[`A`\]\>

Defined in: [core/types/observable-family.mts:46](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L46)

#### Type Parameters

##### A

`A`

##### I

`I` = `A`

***

### ZipObservable

> **ZipObservable**\<`A`\> = `SynStateInternals.ZipObservableImpl`\<`A`\>

Defined in: [core/types/observable-family.mts:163](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L163)

#### Type Parameters

##### A

`A` *extends* [`NonEmptyUnknownList`](types.md#nonemptyunknownlist)

***

### ZipObservableRefined

> **ZipObservableRefined**\<`OS`\> = `SynStateInternals.ZipObservableRefinedImpl`\<`OS`\>

Defined in: [core/types/observable-family.mts:166](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/core/types/observable-family.mts#L166)

#### Type Parameters

##### OS

`OS` *extends* `NonEmptyArray`\<[`Observable`](observable.md#observable)\<`unknown`\>\>
