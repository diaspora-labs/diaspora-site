import { findAssociatedTokenPda as mplFindAssociatedTokenPda } from '@metaplex-foundation/mpl-essentials';
import { handlePublicKey, PublicKeyOptions } from './handlePublicKey';
import { makeUmiWrapper } from './makeUmiWrapper';

type FindAssociatedTokenPdaInput = {
  mint: PublicKeyOptions;
  owner: PublicKeyOptions;
};
export const findAssociatedTokenPda = makeUmiWrapper(
  (input: FindAssociatedTokenPdaInput, umi) => {
    return mplFindAssociatedTokenPda(umi, {
      mint: handlePublicKey(input.mint),
      owner: handlePublicKey(input.owner),
    });
  }
);
