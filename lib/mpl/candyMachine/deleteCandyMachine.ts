import { deleteCandyMachine as mplDeleteCandyMachine } from '@metaplex-foundation/mpl-candy-machine';
import { Signer } from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiSenderWrapper } from '../makeUmiWrapper';

type DeleteCandyMachineInput = {
  candyMachine: PublicKeyOptions;
  authority?: Signer;
};
export const deleteCandyMachine = makeUmiSenderWrapper(
  (input: DeleteCandyMachineInput, umi) => {
    return mplDeleteCandyMachine(umi, {
      ...input,
      candyMachine: handlePublicKey(input.candyMachine),
    });
  }
);
