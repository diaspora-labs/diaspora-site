import { COption } from '@metaplex-foundation/beet';
import BN from 'bn.js';

type bignum = number | bigint | BN;

export function parseBN(value: bignum): number;
export function parseBN(value?: COption<bignum>): number | undefined;
export function parseBN<T>(value: bignum, fn: (n: number) => T): T;
export function parseBN<T>(
  value: COption<bignum>,
  fn: (n: number) => T
): T | undefined;
export function parseBN(value?: COption<bignum>, fn?: (n: number) => unknown) {
  if (value === null || value === undefined) return undefined;
  const num = Number(value);
  return fn ? fn(num) : num;
}
