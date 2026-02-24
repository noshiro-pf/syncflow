import { Optional } from 'ts-data-forge';
import { map } from '../../operators/index.mjs';
import { type KeepInitialValueOperator } from '../../types/index.mjs';

export const mapOptional = <O extends UnknownOptional, B>(
  mapFn: (x: Optional.Unwrap<O>) => B,
): KeepInitialValueOperator<O, Optional<B>> =>
  map((a) => Optional.map(a, mapFn));
