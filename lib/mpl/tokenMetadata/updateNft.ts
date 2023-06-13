import {
  CreatorArgs,
  updateV1 as mplUpdateV1,
  UpdateV1InstructionAccounts,
  UpdateV1InstructionDataArgs,
} from '@metaplex-foundation/mpl-token-metadata';
import { Nullable } from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiSenderWrapper } from '../makeUmiWrapper';
import { rewrapSome } from '../rewrapSome';

type NativeUpdateV1Input = UpdateV1InstructionAccounts &
  UpdateV1InstructionDataArgs;
type UpdateV1Input = Omit<
  NativeUpdateV1Input,
  'newUpdateAuthority' | 'data'
> & {
  newUpdateAuthority?: Nullable<PublicKeyOptions>;
  data?: Nullable<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Nullable<CreatorArgs[]>;
  }>;
};

export const updateNft = makeUmiSenderWrapper((input: UpdateV1Input, umi) => {
  const data = input.data
    ? rewrapSome({
        ...input.data,
        creators: rewrapSome(input.data.creators),
      })
    : undefined;

  return mplUpdateV1(umi, {
    ...input,
    data,
    newUpdateAuthority: input.newUpdateAuthority
      ? rewrapSome(handlePublicKey(input.newUpdateAuthority))
      : undefined,
  });
});
