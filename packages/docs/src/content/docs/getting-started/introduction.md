---
title: Introduction
sidebar:
    order: 1
---

<p align="center">
  <img src="/synstate/synstate-icon.png" alt="SynState Logo" width="400" />
</p>

**SynState** is a lightweight, high-performance, type-safe state management library for TypeScript/JavaScript applications. Perfect for building reactive global state and event-driven systems in React, Vue, and other frameworks.

"SynState" is named after "Synchronized + State." It represents a sound synchronized state through a **glitch-free** Observable implementation.

:::note
For a detailed explanation of glitches and how SynState solves them, see [How SynState Solved the Glitch](/synstate/guides/how-synstate-solved-the-glitch/).
:::

## Features

- 🎯 **Simple State Management**: Easy-to-use `createState` and `createReducer` similar to React `useState`/`useReducer` for global state
- ⚡ **High Performance**: Optimized for fast state updates and minimal re-renders
- 🎨 **Type-Safe**: Full TypeScript support with precise type inference
- 🚀 **Lightweight**: Minimal bundle size with only one external runtime dependency ([ts-data-forge](https://www.npmjs.com/package/ts-data-forge))
- 🌐 **Framework Agnostic**: Works with React, Vue, Svelte, or vanilla JavaScript
- 🔄 **Reactive Updates**: Automatic propagation of state changes to all subscribers
- 📡 **Event System**: Built-in `createValueEmitter`, `createEventEmitter` for event-driven architecture
- 🔧 **Observable-based**: Built on Observable pattern similar to RxJS, but with a completely independent implementation from scratch — not a wrapper. Offers optional advanced features like operators (`map`, `filter`, `scan`, `debounce`) and combinators (`merge`, `combine`)

## Quick Example

`createState` creates a reactive state and a setter function. Subscribers are notified immediately with the initial value, and again whenever the state is updated.

```tsx
// Create a reactive state
const [state, setState] = createState(0);
// type of state: InitializedObservable<number>
// type of setState: (v: number) => number

const stateHistory: number[] = [];

// Subscribe to changes
state.subscribe((count) => {
    stateHistory.push(count);
});

assert.deepStrictEqual(stateHistory, [0]);

// Update state
setState(1);

assert.deepStrictEqual(stateHistory, [0, 1]);
```

For more examples including React integration, see [Quick Start](/synstate/getting-started/quick-start/).

## Next Steps

- [Installation](/synstate/getting-started/installation/) — Install SynState and optional companion packages
- [Quick Start](/synstate/getting-started/quick-start/) — Create your first reactive state
- [Why SynState?](/synstate/guides/why-synstate/) — Learn about the design philosophy and use cases
- [React Integration](/synstate/guides/react-integration/) — Use SynState with React
