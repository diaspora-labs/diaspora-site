import { CandyMachine } from '@creator-experience/types';
import {
  CandyMachineDataArgs,
  updateCandyMachine as mplUpdateCandyMachine,
} from '@metaplex-foundation/mpl-candy-machine';
import { Signer } from '@metaplex-foundation/umi';
import { makeUmiSenderWrapper } from '../makeUmiWrapper';
import { rewrapCandyMachine } from './enhanceCandyMachine';

type UpdateCandyMachineInput = {
  candyMachine: CandyMachine;
  authority: Signer;
  data: Partial<CandyMachineDataArgs>;
};
export const updateCandyMachine = makeUmiSenderWrapper(
  ({ candyMachine, authority, data }: UpdateCandyMachineInput, umi) => {
    const nativeCandyMachine = rewrapCandyMachine(candyMachine);

    return mplUpdateCandyMachine(umi, {
      authority,
      candyMachine: candyMachine.publicKey,
      data: {
        ...nativeCandyMachine.data,
        ...data,
      },
    });
  }
);
