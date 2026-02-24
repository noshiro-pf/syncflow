[**synstate**](../README.md)

***

[synstate](../README.md) / utils/create-event-emitter

# utils/create-event-emitter

## Functions

### createEventEmitter()

> **createEventEmitter**(): readonly \[[`Observable`](../core/types/observable.md#observable)\<`void`\>, () => `void`\]

Defined in: [utils/create-event-emitter.mts:30](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/utils/create-event-emitter.mts#L30)

Creates an event emitter for void events (events without payload).
Returns a tuple of [observable, emitter function].

#### Returns

readonly \[[`Observable`](../core/types/observable.md#observable)\<`void`\>, () => `void`\]

A tuple containing the observable and the emitter function

#### Example

```ts
const [click$, emitClick] = createEventEmitter();

const clickCount = { value: 0 };

click$.subscribe(() => {
  clickCount.value += 1;
});

emitClick(); // logs: Clicked!

assert.deepStrictEqual(clickCount.value, 1);

emitClick();

emitClick();

assert.deepStrictEqual(clickCount.value, 3);
```

***

### createValueEmitter()

> **createValueEmitter**\<`A`\>(): readonly \[[`Observable`](../core/types/observable.md#observable)\<`A`\>, (`value`) => `void`\]

Defined in: [utils/create-event-emitter.mts:69](https://github.com/noshiro-pf/synstate/blob/main/packages/synstate/src/utils/create-event-emitter.mts#L69)

Creates an event emitter with typed payload.
Returns a tuple of [observable, emitter function].

#### Type Parameters

##### A

`A`

The type of the event payload

#### Returns

readonly \[[`Observable`](../core/types/observable.md#observable)\<`A`\>, (`value`) => `void`\]

A tuple containing the observable and the emitter function

#### Example

```ts
const [message$, emitMessage] = createValueEmitter<string>();

const messageHistory: string[] = [];

message$.subscribe((msg) => {
  messageHistory.push(msg);
});

emitMessage('Hello'); // logs: Hello

assert.deepStrictEqual(messageHistory, ['Hello']);

emitMessage('World');

assert.deepStrictEqual(messageHistory, ['Hello', 'World']);
```
