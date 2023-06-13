import { CandyMachine, DefaultGuardSet } from '@creator-experience/types';
import { some } from '@metaplex-foundation/umi';

const makeFindLabel =
  (guardName: keyof DefaultGuardSet) => (candyMachine: CandyMachine) => {
    const label = candyMachine.candyGuard?.groups.find(
      (entry) => entry.guards[guardName]
    )?.label;

    return label ? some(label) : undefined;
  };

export const findFreezeSolGroupLabel = makeFindLabel('freezeSolPayment');
export const findFreezeTokenGroupLabel = makeFindLabel('freezeTokenPayment');
