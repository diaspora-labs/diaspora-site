import { CandyMachine, Nft } from '@creator-experience/types';
import { getConnection } from '@creator-experience/utils';
import { route } from '@metaplex-foundation/mpl-candy-machine';
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-essentials';
import {
  TokenStandard,
  TokenState,
} from '@metaplex-foundation/mpl-token-metadata';
import {
  base58PublicKey,
  publicKey,
  PublicKey as UmiPublicKey,
  transactionBuilder,
  unwrapSome,
} from '@metaplex-foundation/umi';
import { ParsedAccountData, PublicKey } from '@solana/web3.js';
import mem from 'mem';
import { makeUmiSenderWrapper } from '../../makeUmiWrapper';
import { fetchTokenRecord } from '../../tokenMetadata/tokenRecord';
import { fetchFreezeEscrow } from './fetchFreezeEscrow';
import {
  findFreezeSolGroupLabel,
  findFreezeTokenGroupLabel,
} from './findFreezeGroupLabel';

type ThawDestinationArgs =
  | {
      destination: UmiPublicKey;
    }
  | {
      destinationAta: UmiPublicKey;
      mint: UmiPublicKey;
    };

const getDestinationFromPda = mem(
  async (pda: string): Promise<ThawDestinationArgs> => {
    const freezeEscrow = await fetchFreezeEscrow(pda);
    const { destination } = freezeEscrow;

    const connection = getConnection();
    const info = await connection.getParsedAccountInfo(
      new PublicKey(destination.bytes)
    );

    const data = info.value?.data as ParsedAccountData;
    const program = data.program;
    const isSpl = program === 'spl-token';

    if (!isSpl) {
      return {
        destination,
      };
    }

    const mint = data.parsed.info.mint;

    if (typeof mint !== 'string') {
      throw new Error('Mint is not a string');
    }

    return {
      destinationAta: destination,
      mint: publicKey(mint),
    };
  }
);

type ThawArgsFromNft = ThawDestinationArgs & {
  nftOwner: UmiPublicKey;
};
const getThawArgsFromNft = async (
  nft: Nft
): Promise<ThawArgsFromNft | null> => {
  const connection = getConnection();
  // Find the largest accounts on the mint, the first of which should be the token account
  const largestAccounts = await connection.getTokenLargestAccounts(
    new PublicKey(base58PublicKey(nft.publicKey))
  );

  // With the token account address we can grab the actual account info
  const largestAccountInfo = await connection.getParsedAccountInfo(
    largestAccounts.value[0].address
  );

  const { parsed } = largestAccountInfo?.value?.data as ParsedAccountData;
  const nftOwner = publicKey(parsed.info.owner as string);

  const isProgrammable =
    nft.metadata.tokenStandard === TokenStandard.ProgrammableNonFungible;

  // If a nft is a pNFT we need to check the token record account to see
  // if it is frozen instead of the token account as all pNFTs are frozen by design
  if (!isProgrammable) {
    const isFrozen = (parsed.info.state as string).toLowerCase() === 'frozen';

    if (!isFrozen) {
      return null;
    }

    const delegate = parsed.info.delegate;
    const destination = await getDestinationFromPda(delegate);

    return {
      ...destination,
      nftOwner,
    };
  }

  const tokenRecordAccount = await fetchTokenRecord({
    mint: nft.publicKey,
    token: largestAccounts.value[0].address,
  });

  const isFrozen = tokenRecordAccount.state === TokenState.Locked;

  // With pNFTs the concept of frozen / thaw is called locked and unlocked,
  // they function the same to the end user, but had to be done this way as
  // all pNFTs are frozen by design
  if (!isFrozen) {
    return null;
  }

  const pda = unwrapSome(tokenRecordAccount.delegate) || null;

  if (!pda) {
    throw new Error('No pda for frozen pNft');
  }
  const destination = await getDestinationFromPda(base58PublicKey(pda));

  return {
    ...destination,
    nftOwner,
  };
};

type RouteThawNftInput = {
  nft: Nft;
  candyMachine: CandyMachine;
};
export const routeThawNft = makeUmiSenderWrapper(
  async ({ nft, candyMachine }: RouteThawNftInput, umi) => {
    if (!candyMachine.candyGuard) {
      throw new Error('No candy guard in thaw');
    }

    const nftThawArgs = await getThawArgsFromNft(nft);

    if (!nftThawArgs) {
      return null;
    }

    const routeInstruction =
      'destination' in nftThawArgs
        ? route(umi, {
            guard: 'freezeSolPayment',
            candyMachine: candyMachine.publicKey,
            candyGuard: candyMachine.candyGuard?.publicKey,
            group: findFreezeSolGroupLabel(candyMachine),
            routeArgs: {
              path: 'thaw',
              nftMint: nft.publicKey,
              nftTokenStandard: candyMachine.tokenStandard,
              nftRuleSet: candyMachine.ruleSet || undefined,
              destination: nftThawArgs.destination,
              nftOwner: nftThawArgs.nftOwner,
            },
          })
        : route(umi, {
            guard: 'freezeTokenPayment',
            candyMachine: candyMachine.publicKey,
            candyGuard: candyMachine.candyGuard?.publicKey,
            group: findFreezeTokenGroupLabel(candyMachine),
            routeArgs: {
              path: 'thaw',
              nftMint: nft.publicKey,
              nftTokenStandard: candyMachine.tokenStandard,
              nftRuleSet: candyMachine.ruleSet || undefined,
              destinationAta: nftThawArgs.destinationAta,
              mint: nftThawArgs.mint,
              nftOwner: nftThawArgs.nftOwner,
            },
          });

    if (candyMachine.tokenStandard === TokenStandard.ProgrammableNonFungible) {
      return (
        transactionBuilder()
          // This amount of compute units is required to thaw a frozen payment.
          // However, this might not be enough if the user has a larger ruleset,
          // as it requires more compute at the moment.
          // The metaplex rulesets at about 400K compute units,
          // so we set the limit to 700K to be safe
          .add(setComputeUnitLimit(umi, { units: 700_000 }))
          .add(routeInstruction)
      );
    }

    return transactionBuilder().add(routeInstruction);
  }
);
