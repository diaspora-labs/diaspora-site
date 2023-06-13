import { none, Nullable, Option, some } from '@metaplex-foundation/umi';

export function rewrapSome<T>(nullable: Nullable<T> | undefined): Option<T> {
  return nullable ? some(nullable) : none();
}
