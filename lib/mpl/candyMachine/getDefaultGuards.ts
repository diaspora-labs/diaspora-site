import { PUBLIC_GUARD_NAME } from '@creator-experience/constants';
import { CandyMachine } from '@creator-experience/types';

export const getDefaultGuards = (candyMachine: CandyMachine) => {
  // Check if there is a public guard within the groups
  const publicGuard = candyMachine?.candyGuard?.groups
    ? candyMachine.candyGuard.groups.filter(
        (group) => group.label === PUBLIC_GUARD_NAME
      )
    : [];

  // Get the default guards for this CandyMachine either the one within the groups or the default guards
  const guards =
    publicGuard && publicGuard[0]
      ? publicGuard[0].guards
      : candyMachine?.candyGuard?.guards;

  return guards;
};
