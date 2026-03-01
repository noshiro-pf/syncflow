---
title: Advanced Examples
---

## Search with Debounce

A debounced search pipeline with automatic cancellation using `switchMap`:

```tsx
import type * as React from 'react';
import {
    createState,
    debounce,
    filter,
    fromPromise,
    type InitializedObservable,
    map,
    switchMap,
    withInitialValue,
} from 'synstate';
import { useObservableValue } from 'synstate-react-hooks';
import { Result } from 'ts-data-forge';

const [searchState, setSearchState] = createState('');

// Advanced reactive pipeline with debounce and filtering
const searchResults$: InitializedObservable<
    readonly Readonly<{ id: string; name: string }>[]
> = searchState
    .pipe(debounce(300))
    .pipe(filter((query) => query.length > 2))
    .pipe(
        switchMap((query) =>
            fromPromise(
                fetch(`/api/search?q=${query}`).then(
                    (r) =>
                        r.json() as Promise<
                            readonly Readonly<{ id: string; name: string }>[]
                        >,
                ),
            ),
        ),
    )
    .pipe(filter((res) => Result.isOk(res)))
    .pipe(map((res) => Result.unwrapOk(res)))
    .pipe(withInitialValue([]));

const SearchBox = (): React.JSX.Element => {
    const searchResults = useObservableValue(searchResults$);

    return (
        <div>
            <input
                placeholder={'Search...'}
                onChange={(e) => {
                    setSearchState(e.target.value);
                }}
            />
            <ul>
                {searchResults.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};
```

## Event Emitter with Throttle

```tsx
import { createEventEmitter, throttle } from 'synstate';

// Create event emitter
const [refreshClicked, onRefreshClick] = createEventEmitter();

// Subscribe to events
refreshClicked.subscribe(() => {
    console.log('Refresh Clicked');
});

// Throttle refresh clicks to prevent rapid successive executions
const throttledRefresh = refreshClicked.pipe(throttle(2000));

throttledRefresh.subscribe(() => {
    console.log('Executing refresh...');
    // Actual refresh logic here
    // This will be called at most once every 2 seconds
});

const DataTable = (): React.JSX.Element => (
    <div>
        <button onClick={onRefreshClick}>{'Refresh'}</button>
        <p>
            {'Data: '}
            {/* Display data here */}
        </p>
    </div>
);
```

## Simple State with Additional APIs

```tsx

```
