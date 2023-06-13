import { CandyMachine } from '@creator-experience/types';
import { cleanList } from '@creator-experience/utils';

export const getAllGuards = (candyMachine: CandyMachine) => {
  const mainGuard = candyMachine.candyGuard?.guards;
  const groupGuards =
    candyMachine.candyGuard?.groups.map((group) => group.guards) || [];
  const allGuards = [mainGuard, ...groupGuards];

  return cleanList(allGuards);
};
