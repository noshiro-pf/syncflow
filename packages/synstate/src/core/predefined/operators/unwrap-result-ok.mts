import { Result } from 'ts-data-forge';
import { map } from '../../operators/index.mjs';
import { type KeepInitialValueOperator } from '../../types/index.mjs';

export const unwrapResultOk = <
  R extends UnknownResult,
>(): KeepInitialValueOperator<R, Result.UnwrapOk<R> | undefined> =>
  // eslint-disable-next-line total-functions/no-unsafe-type-assertion
  map(Result.unwrapOk as Fn<R, Result.UnwrapOk<R> | undefined>);
