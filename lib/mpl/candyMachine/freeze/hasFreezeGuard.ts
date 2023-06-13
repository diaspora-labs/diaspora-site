import { CandyMachine } from '@creator-experience/types';
import { getAllGuards } from '../getAllGuards';

export const hasFreezeGuard = (
  candyMachine: CandyMachine | null | undefined
): boolean => {
  if (!candyMachine) {
    return false;
  }

  const allGuards = getAllGuards(candyMachine);

  return allGuards.some(
    (guards) => guards.freezeTokenPayment || guards.freezeSolPayment
  );
};
