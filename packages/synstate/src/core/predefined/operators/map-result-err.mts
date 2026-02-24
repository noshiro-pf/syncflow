import { Result } from 'ts-data-forge';
import { map } from '../../operators/index.mjs';
import { type KeepInitialValueOperator } from '../../types/index.mjs';

export const mapResultErr = <R extends UnknownResult, E2>(
  mapFn: (x: Result.UnwrapErr<R>) => E2,
): KeepInitialValueOperator<R, Result<Result.UnwrapOk<R>, E2>> =>
  map((a) => Result.mapErr(a, mapFn));
