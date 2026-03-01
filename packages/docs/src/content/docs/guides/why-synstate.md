---
title: Why SynState?
sidebar:
  order: 1
---

## Simple to Start, Powerful When You Need It

SynState is a state management library for web frontends. For most use cases, `createState`, `createReducer`, and simple combinators like `combine` and `map` are all you need — clean, minimal APIs that feel as intuitive as React's `useState` / `useReducer`, but for global state.

When your requirements grow more complex, SynState scales with you. Built on its own Observable implementation, it provides operators like `debounce`, `throttle`, `switchMap`, and `mergeMap` for sophisticated asynchronous state management — without requiring an additional library like RxJS. You can describe everything from a simple counter to a debounced search pipeline with auto-cancellation in a single, unified API.

## Why Observable-Based?

A state management library that scales from simple global state to complex asynchronous workflows needs **reactive value propagation** at its core — when one piece of state changes, all derived values must update automatically and consistently. The Observable pattern is a natural fit for this: it models state as streams of values that can be composed, transformed, and combined declaratively.

RxJS is the most well-known Observable library, and it excels at modeling asynchronous event processing. However, RxJS has a fundamental issue known as **glitch** — a phenomenon where derived values can temporarily enter inconsistent intermediate states during synchronous propagation. For a state management library, where consistency of derived state is critical, this is unacceptable. SynState was built from scratch with a glitch-free Observable implementation to solve this problem.

For a detailed explanation, see [How SynState Solved the Glitch](/synstate/guides/how-synstate-solved-the-glitch/).

## Key Differences from RxJS

- **Glitch free**: While RxJS Observables suffer from a troublesome phenomenon called glitch, SynState Observables are glitch-free.
- **InitializedObservable**: Provides `InitializedObservable` which always holds an initial value, making it ideal for representing state.
- **Focus on State Management**: Designed specifically for state management, not just asynchronous event processing. SynState provides utility functions `createState`, `createReducer`, and `createBooleanState`. However, this doesn't mean it's inadequate for asynchronous event processing — it can handle asynchronous operations as elegantly as RxJS.

## Use Cases

**Use SynState when you need:**

- Global state management across components
- Event-driven communication between components
- Type-safe event emitters
- Redux-like state with reducers
- Simple reactive patterns (debounce, throttle, etc.)

**Consider other solutions when:**

- You only need a React component (local) state (use React hooks `useState`, `useReducer`)
- Your app is simple enough for React Context alone
