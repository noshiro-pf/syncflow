---
title: Quick Start
sidebar:
    order: 3
---

## Simple State Management

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

## With React

```tsx
import type * as React from 'react';
import { createState } from 'synstate-react-hooks';

const [useUserState, setUserState] = createState({
    name: '',
    email: '',
});

const UserProfile = (): React.JSX.Element => {
    const user = useUserState();

    return (
        <div>
            <p>
                {'Name: '}
                {user.name}
            </p>
            <button
                onClick={() => {
                    setUserState({
                        name: 'Alice',
                        email: 'alice@example.com',
                    });
                }}
            >
                {'Set User'}
            </button>
        </div>
    );
};
```
