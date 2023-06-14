import { CandyMachine } from '@creator-experience/types';
import {
  addConfigLines as mplAddConfigLines,
  CandyMachineItem,
} from '@metaplex-foundation/mpl-candy-machine';
import { Signer } from '@metaplex-foundation/umi';
import { makeUmiSenderWrapper } from '../makeUmiWrapper';

type AddConfigLinesInput = {
  candyMachine: CandyMachine;
  candyMachineItems: CandyMachineItem[];
  authority: Signer;
  index: number;
};
export const addConfigLines = makeUmiSenderWrapper(
  (
    { candyMachine, authority, index, candyMachineItems }: AddConfigLinesInput,
    umi
  ) => {
    return mplAddConfigLines(umi, {
      candyMachine: candyMachine.publicKey,
      authority,
      index,
      configLines: candyMachineItems,
    });
  }
);
