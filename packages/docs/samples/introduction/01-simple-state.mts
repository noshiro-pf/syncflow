import { createState } from 'synstate';

/* embed-sample-code-ignore-this-line */ if (import.meta.vitest !== undefined) {
  /* embed-sample-code-ignore-this-line */ test('simple-state', () => {
    // Create a reactive state
    const [state, setState] = createState(0);
    // type of state: InitializedObservable<number>
    // type of setState: (v: number) => number

    // Subscribe to changes
    state.subscribe((count) => {
      console.log(count); // 0, 1
    });

    // Update state
    setState(1);

    // embed-sample-code-ignore-below

    assert.isTrue(true);
  });
}
