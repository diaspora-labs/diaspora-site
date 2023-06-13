import { findFreezeEscrowPda as mplFindFreezeEscrowPda } from '@metaplex-foundation/mpl-candy-machine';
import { handlePublicKey, PublicKeyOptions } from '../../handlePublicKey';
import { makeUmiWrapper } from '../../makeUmiWrapper';

type FindFreezeEscrowPdaInput = {
  candyMachine: PublicKeyOptions;
  candyGuard: PublicKeyOptions;
  destination: PublicKeyOptions;
};
export const findFreezeEscrowPda = makeUmiWrapper(
  (input: FindFreezeEscrowPdaInput, umi) => {
    return mplFindFreezeEscrowPda(umi, {
      candyMachine: handlePublicKey(input.candyMachine),
      candyGuard: handlePublicKey(input.candyGuard),
      destination: handlePublicKey(input.destination),
    });
  }
);
