import { Result } from 'ts-data-forge';
import { map } from '../../operators/index.mjs';
import { type KeepInitialValueOperator } from '../../types/index.mjs';

export const unwrapResultErr = <
  R extends UnknownResult,
>(): KeepInitialValueOperator<R, Result.UnwrapErr<R> | undefined> =>
  map(Result.unwrapErr as Fn<R, Result.UnwrapErr<R> | undefined>);
