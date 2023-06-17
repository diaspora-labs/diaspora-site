import { findCandyMachineAuthorityPda as mplFindCandyMachineAuthorityPda } from '@metaplex-foundation/mpl-candy-machine';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiWrapper } from '../makeUmiWrapper';

export const findCandyMachineAuthorityPda = makeUmiWrapper(
  (candyMachinePublicKey: PublicKeyOptions, umi) => {
    return mplFindCandyMachineAuthorityPda(umi, {
      candyMachine: handlePublicKey(candyMachinePublicKey),
    });
  }
);
