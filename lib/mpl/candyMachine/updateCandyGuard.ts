import {
  CandyMachine,
  DefaultGuardSetArgs,
  GuardGroupArgs,
} from '@creator-experience/types';
import { updateCandyGuard as mplUpdateCandyGuard } from '@metaplex-foundation/mpl-candy-machine';
import { Signer } from '@metaplex-foundation/umi';
import { makeUmiSenderWrapper } from '../makeUmiWrapper';
import { rewrapGuards } from './unwrapGuards';

type UpdateCandyMachineInput = {
  candyMachine: CandyMachine;
  authority: Signer;
  guards: Partial<DefaultGuardSetArgs>;
  groups: GuardGroupArgs<DefaultGuardSetArgs>[] | undefined;
};
export const updateCandyGuard = makeUmiSenderWrapper(
  (
    { candyMachine, authority, guards, groups }: UpdateCandyMachineInput,
    umi
  ) => {
    if (!candyMachine.candyGuard) {
      throw new Error('No Candy Guard');
    }

    return mplUpdateCandyGuard(umi, {
      candyGuard: candyMachine.candyGuard.publicKey,
      authority,
      guards: rewrapGuards(guards),
      groups: groups
        ? groups.map((group) => ({
            label: group.label,
            guards: rewrapGuards(group.guards),
          }))
        : [],
    });
  }
);
