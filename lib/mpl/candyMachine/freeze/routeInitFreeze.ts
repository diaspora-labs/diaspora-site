import { CandyMachine } from '@creator-experience/types';
import { route } from '@metaplex-foundation/mpl-candy-machine';
import { PublicKey } from '@metaplex-foundation/umi';
import { makeUmiRequiredWrapper } from '../../makeUmiWrapper';
import { safeBase58PublicKeyCompare } from '../../safeBase58PublicKey';
import { sendAndConfirm } from '../../sendAndConfirm';
import { getAllGuards } from '../getAllGuards';
import {
  findFreezeSolGroupLabel,
  findFreezeTokenGroupLabel,
} from './findFreezeGroupLabel';

type InitFreezeSolPaymentInput = {
  candyMachine: CandyMachine;
  period: number;
};

const getAllFreezeGuards = (candyMachine: CandyMachine) => {
  const allGuards = getAllGuards(candyMachine);

  const freezeSolPayment = allGuards.find(
    (guards) => guards.freezeSolPayment
  )?.freezeSolPayment;

  const freezeTokenPayments = allGuards.reduce<
    {
      destinationAta: PublicKey;
      mint: PublicKey;
    }[]
  >((acc, { freezeTokenPayment }) => {
    if (!freezeTokenPayment) {
      return acc;
    }

    // Only init freeze once per destination/mint
    const found = acc.find((entry) =>
      safeBase58PublicKeyCompare(
        entry.destinationAta,
        freezeTokenPayment.destinationAta
      )
    );

    if (!found) {
      return [
        ...acc,
        {
          mint: freezeTokenPayment.mint,
          destinationAta: freezeTokenPayment.destinationAta,
        },
      ];
    }

    return acc;
  }, []);

  return {
    freezeSolPayment,
    freezeTokenPayments,
  };
};

export const routeInitFreezeSolPayment = makeUmiRequiredWrapper(
  async ({ candyMachine, period }: InitFreezeSolPaymentInput, umi) => {
    const { freezeSolPayment, freezeTokenPayments } =
      getAllFreezeGuards(candyMachine);

    const solPaymentTx =
      freezeSolPayment &&
      route(umi, {
        guard: 'freezeSolPayment',
        candyMachine: candyMachine.publicKey,
        group: findFreezeSolGroupLabel(candyMachine),
        routeArgs: {
          path: 'initialize',
          destination: freezeSolPayment.destination,
          candyGuardAuthority: umi.payer,
          period,
        },
      });

    const tokenPaymentTxs = freezeTokenPayments.map((freezeTokenPayment) => {
      return route(umi, {
        guard: 'freezeTokenPayment',
        candyMachine: candyMachine.publicKey,
        group: findFreezeTokenGroupLabel(candyMachine),
        routeArgs: {
          path: 'initialize',
          mint: freezeTokenPayment.mint,
          destinationAta: freezeTokenPayment.destinationAta,
          candyGuardAuthority: umi.payer,
          period,
        },
      });
    });

    const txs = solPaymentTx
      ? [solPaymentTx, ...tokenPaymentTxs]
      : tokenPaymentTxs;

    const txPromises = txs.map((tx) => sendAndConfirm(tx, umi));

    return await Promise.all(txPromises);
  }
);
