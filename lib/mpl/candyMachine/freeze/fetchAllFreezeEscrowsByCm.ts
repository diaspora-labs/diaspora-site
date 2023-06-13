import { CandyMachine } from '@creator-experience/types';
import { cleanList, getSplAllowlist } from '@creator-experience/utils';
import { base58PublicKey } from '@metaplex-foundation/umi';
import { findAssociatedTokenPda } from '../../findAssociatedTokenPda';
import { PublicKeyOptions, publicKeyToString } from '../../handlePublicKey';
import { getAllGuards } from '../getAllGuards';
import { safeFetchFreezeEscrow } from './fetchFreezeEscrow';
import { findFreezeEscrowPda } from './findFreezeEscrowPda';

// Can either manually provide the sol/spl destinations
// or the destinations can be derived from the CM object
type FetchAllFreezeEscrowsInput =
  | {
      candyMachine: CandyMachine;
      solPaymentDestination: PublicKeyOptions;
      splPaymentDestination: PublicKeyOptions;
    }
  | {
      candyMachine: CandyMachine;
      deriveDestinations: true;
    };

const getSolDestinations = (input: FetchAllFreezeEscrowsInput): string[] => {
  if ('solPaymentDestination' in input) {
    return [publicKeyToString(input.solPaymentDestination)];
  }

  const allGuards = getAllGuards(input.candyMachine);
  const solDestinations = allGuards.map(
    (guard) => guard.freezeSolPayment?.destination
  );
  const cleaned = cleanList(solDestinations).map(base58PublicKey);
  const unique = [...new Set(cleaned)];

  return unique;
};

const getSplDestinationMap = (
  input: FetchAllFreezeEscrowsInput
): Record<string, string> => {
  const splTokens = getSplAllowlist();

  if ('splPaymentDestination' in input) {
    return splTokens.reduce<Record<string, string>>((acc, splTokenAddress) => {
      const destination = base58PublicKey(
        findAssociatedTokenPda({
          mint: splTokenAddress,
          owner: input.splPaymentDestination,
        })
      );

      return {
        ...acc,
        [destination]: splTokenAddress,
      };
    }, {});
  }

  const allGuards = getAllGuards(input.candyMachine);

  return allGuards.reduce<Record<string, string>>(
    (acc, { freezeTokenPayment }) => {
      if (!freezeTokenPayment) {
        return acc;
      }

      const destinationAta = base58PublicKey(freezeTokenPayment.destinationAta);
      const mint = base58PublicKey(freezeTokenPayment.mint);

      return {
        ...acc,
        [destinationAta]: mint,
      };
    },
    {}
  );
};

export const fetchAllFreezeEscrowsByCm = async (
  input: FetchAllFreezeEscrowsInput
) => {
  const { candyMachine } = input;
  const { candyGuard } = candyMachine;
  if (!candyGuard) {
    throw new Error('No candy guard');
  }

  const solPaymentDestinations = getSolDestinations(input);
  const splDestinationMap = getSplDestinationMap(input);
  const splDestinations = Object.keys(splDestinationMap);
  const allDestinations = [...solPaymentDestinations, ...splDestinations];

  const allFreezePdas = allDestinations.map((destination) =>
    findFreezeEscrowPda({
      candyMachine: candyMachine.publicKey,
      candyGuard: candyGuard.publicKey,
      destination,
    })
  );

  const freezeEscrowPromises = allFreezePdas.map((freezePda) =>
    safeFetchFreezeEscrow(freezePda)
  );

  const freezeEscrows = await Promise.all(freezeEscrowPromises);
  const cleanedFreezeEscrows = cleanList(freezeEscrows);

  const hasMintedOut = Number(candyMachine.itemsRemaining) === 0;

  const enhanced = cleanedFreezeEscrows.map((freezeEscrow) => {
    const firstMint = Number(freezeEscrow.firstMintTime);
    const freezePeriod = Number(freezeEscrow.freezePeriod);
    const freezeExpiry = (firstMint + freezePeriod) * 1000;
    const hasExpired = freezeExpiry < Date.now();

    const canThaw = hasMintedOut || hasExpired;
    const isSpl = splDestinations.includes(
      base58PublicKey(freezeEscrow.destination)
    );

    const mint = splDestinationMap[base58PublicKey(freezeEscrow.destination)];

    return {
      ...freezeEscrow,
      canThaw,
      isSpl,
      mint,
    };
  });

  return enhanced;
};
