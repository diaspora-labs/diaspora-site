import { CandyMachine } from '@creator-experience/types';
import {
  CandyGuard as MplCandyGuard,
  CandyMachine as MplCandyMachine,
} from '@metaplex-foundation/mpl-candy-machine';
import { unwrapSome } from '@metaplex-foundation/umi';
import { rewrapSome } from '../rewrapSome';
import { unwrapGuards } from './unwrapGuards';

export const enhanceCandyMachine = (
  candyMachine: MplCandyMachine,
  candyGuard: MplCandyGuard | null
): CandyMachine => {
  const enhancedCandyGuard = candyGuard
    ? {
        ...candyGuard,
        guards: unwrapGuards(candyGuard.guards),
        groups: candyGuard.groups.map((group) => ({
          ...group,
          guards: unwrapGuards(group.guards),
        })),
      }
    : null;

  return {
    ...candyMachine,
    itemsRemaining:
      candyMachine.data.itemsAvailable - candyMachine.itemsRedeemed,
    data: {
      ...candyMachine.data,
      hiddenSettings: unwrapSome(candyMachine.data.hiddenSettings),
      configLineSettings: unwrapSome(candyMachine.data.configLineSettings),
    },
    candyGuard: enhancedCandyGuard,
    ruleSet: unwrapSome(candyMachine.ruleSet),
  };
};

export const rewrapCandyMachine = (
  candyMachine: CandyMachine
): MplCandyMachine => {
  const { candyGuard, itemsRemaining, ...rest } = candyMachine;

  return {
    ...rest,
    data: {
      ...rest.data,
      hiddenSettings: rewrapSome(rest.data.hiddenSettings),
      configLineSettings: rewrapSome(rest.data.configLineSettings),
    },
    ruleSet: rewrapSome(rest.ruleSet),
  };
};
