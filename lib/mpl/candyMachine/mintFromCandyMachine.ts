import { CandyMachine, Nft } from '@creator-experience/types';
import { mintV2 } from '@metaplex-foundation/mpl-candy-machine';
import {
  createMintWithAssociatedToken,
  findAssociatedTokenPda,
} from '@metaplex-foundation/mpl-essentials';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import {
  generateSigner,
  some,
  TransactionBuilder,
  transactionBuilder,
  Umi,
} from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiSenderWrapper, makeUmiTxWrapper } from '../makeUmiWrapper';

type MintCandyMachineInput =
  | {
      candyMachine: CandyMachine;
      collectionNft: Nft;
      owner: PublicKeyOptions;
      groupLabel?: string;
    }
  | {
      candyMachineKey: PublicKeyOptions;
      collectionMint: PublicKeyOptions;
      collectionUpdateAuthority: PublicKeyOptions;
      tokenStandard: TokenStandard;
      owner: PublicKeyOptions;
      groupLabel?: string;
    };

const getMintFromCmTx = (
  input: MintCandyMachineInput,
  umi: Umi
): TransactionBuilder => {
  const mint = generateSigner(umi);

  const owner = handlePublicKey(input.owner);
  const defaultInput = {
    nftMint: mint.publicKey,
    owner,
    groupLabel: input.groupLabel ? some(input.groupLabel) : undefined,
    token: findAssociatedTokenPda(umi, {
      mint: mint.publicKey,
      owner,
    }),
  };
  const unionInput =
    'candyMachine' in input
      ? {
          candyMachine: input.candyMachine.publicKey,
          collectionMint: input.collectionNft.publicKey,
          collectionUpdateAuthority:
            input.collectionNft.metadata.updateAuthority,
          tokenStandard: input.candyMachine.tokenStandard,
        }
      : {
          candyMachine: handlePublicKey(input.candyMachineKey),
          collectionMint: handlePublicKey(input.collectionMint),
          collectionUpdateAuthority: handlePublicKey(
            input.collectionUpdateAuthority
          ),
          tokenStandard: input.tokenStandard,
        };
  const mintInput = {
    ...defaultInput,
    ...unionInput,
  };

  return transactionBuilder()
    .add(
      createMintWithAssociatedToken(umi, {
        mint,
        owner,
      })
    )
    .add(mintV2(umi, mintInput));
};

export const mintFromCandyMachineTx = makeUmiTxWrapper(getMintFromCmTx);
export const mintFromCandyMachine = makeUmiSenderWrapper(getMintFromCmTx);
