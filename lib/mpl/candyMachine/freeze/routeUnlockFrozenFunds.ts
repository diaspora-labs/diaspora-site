import { CandyMachine, DefaultGuardSetArgs } from '@creator-experience/types';
import { route } from '@metaplex-foundation/mpl-candy-machine';
import { publicKey } from '@metaplex-foundation/umi';
import { PublicKeyOptions } from '../../handlePublicKey';
import { makeUmiRequiredWrapper } from '../../makeUmiWrapper';
import { sendAndConfirm } from '../../sendAndConfirm';
import { updateCandyGuard } from '../updateCandyGuard';
import { fetchAllFreezeEscrowsByCm } from './fetchAllFreezeEscrowsByCm';
import {
  findFreezeSolGroupLabel,
  findFreezeTokenGroupLabel,
} from './findFreezeGroupLabel';

const updatePaymentGuard = (
  guards: DefaultGuardSetArgs
): DefaultGuardSetArgs => ({
  ...guards,
  solPayment: guards.freezeSolPayment || guards.solPayment,
  tokenPayment: guards.freezeTokenPayment || guards.tokenPayment,
  freezeSolPayment: null,
  freezeTokenPayment: null,
});

type RouteUnlockFrozenFundsInput = {
  candyMachine: CandyMachine;
  solPaymentDestination: PublicKeyOptions;
  splPaymentDestination: PublicKeyOptions;
};
export const routeUnlockFrozenFunds = makeUmiRequiredWrapper(
  async (
    {
      candyMachine,
      solPaymentDestination,
      splPaymentDestination,
    }: RouteUnlockFrozenFundsInput,
    umi
  ) => {
    const { candyGuard } = candyMachine;
    if (!candyGuard) {
      throw new Error('no candy guard');
    }

    const freezeEscrows = await fetchAllFreezeEscrowsByCm({
      candyMachine,
      solPaymentDestination,
      splPaymentDestination,
    });

    if (!freezeEscrows.length) {
      throw new Error('No freeze escrow accounts to unlock');
    }

    const frozenCount = freezeEscrows.reduce((acc, curr) => {
      return acc + curr.frozenCount;
    }, BigInt(0));

    if (frozenCount > 0) {
      throw new Error('Cannot unlock funds, NFTs still frozen');
    }

    const unlocks = freezeEscrows.map((freezeEscrow) => {
      if (freezeEscrow.isSpl) {
        return route(umi, {
          guard: 'freezeTokenPayment',
          candyMachine: candyMachine.publicKey,
          candyGuard: candyGuard.publicKey,
          group: findFreezeTokenGroupLabel(candyMachine),
          routeArgs: {
            path: 'unlockFunds',
            destinationAta: freezeEscrow.destination,
            mint: publicKey(freezeEscrow.mint),
            candyGuardAuthority: umi.payer,
          },
        });
      }

      return route(umi, {
        guard: 'freezeSolPayment',
        candyMachine: candyMachine.publicKey,
        candyGuard: candyGuard.publicKey,
        group: findFreezeSolGroupLabel(candyMachine),
        routeArgs: {
          path: 'unlockFunds',
          destination: freezeEscrow.destination,
          candyGuardAuthority: umi.payer,
        },
      });
    });

    const unlockPromises = unlocks.map((tx) => sendAndConfirm(tx, umi));
    const unlockResult = await Promise.all(unlockPromises);

    const guards = updatePaymentGuard(candyGuard.guards);
    const groups = candyGuard.groups.map((group) => ({
      ...group,
      guards: updatePaymentGuard(group.guards),
    }));

    const updateResult = await updateCandyGuard(
      {
        candyMachine,
        guards,
        groups,
        authority: umi.payer,
      },
      umi
    );

    return [...unlockResult, updateResult];
  }
);
