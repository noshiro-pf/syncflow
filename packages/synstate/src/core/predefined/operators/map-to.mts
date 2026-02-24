import { map } from '../../operators/index.mjs';
import { type KeepInitialValueOperator } from '../../types/index.mjs';

export const mapTo = <A, B>(value: B): KeepInitialValueOperator<A, B> =>
  map(() => value);
