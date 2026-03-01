import { type Observable } from '../core/index.mjs';

export const lastValueFrom = <A,>(observable$: Observable<A>): Promise<A> =>
  new Promise<A>((resolve, reject) => {
    let mut_hasValue = false;

    let mut_lastValue: A;

    observable$.subscribe(
      (value) => {
        mut_hasValue = true;

        mut_lastValue = value;
      },
      () => {
        if (mut_hasValue) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          resolve(mut_lastValue!);
        } else {
          reject(new Error('Observable completed without emitting a value'));
        }
      },
    );
  });
