import { map } from '../../operators/index.mjs';
import { type KeepInitialValueOperator } from '../../types/index.mjs';

export const pluck = <A, K extends keyof A>(
  key: K,
): KeepInitialValueOperator<A, A[K]> => map((a) => a[key]);

/**
 * Alias for `pluck`.
 * @see pluck
 */
export const getKey = pluck;
