import {
  Collection,
  createAndMint,
  createNft as mplCreateNft,
  createProgrammableNft as mplCreateProgrammableNft,
  Creator,
  PrintSupplyArgs,
  TokenStandard,
} from '@metaplex-foundation/mpl-token-metadata';
import {
  base58PublicKey,
  generateSigner,
  KeypairSigner,
  Nullable,
  Option,
  some,
  Umi,
} from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import {
  makeUmiRequiredWrapper,
  makeUmiSenderWrapper,
  makeUmiTxWrapper,
} from '../makeUmiWrapper';
import { rewrapSome } from '../rewrapSome';
import { fetchNft } from './fetchNft';

type NativeCreateNftInput = Omit<
  Parameters<typeof createAndMint>[1],
  'amount' | 'tokenStandard'
>;

type CreateNftInput = Omit<
  NativeCreateNftInput,
  'mint' | 'collection' | 'printSupply' | 'creators' | 'ruleSet'
> & {
  mint: KeypairSigner;
  collection?: Nullable<Collection>;
  printSupply?: Nullable<PrintSupplyArgs>;
  creators?: Nullable<Creator[]>;
  ruleSet?: PublicKeyOptions;
  tokenStandard?: TokenStandard;
};

const getCreateNftTx = (input: CreateNftInput, umi: Umi) => {
  const creators: Option<Creator[]> | undefined = input.creators
    ? some(
        input.creators.map((creator) => ({
          ...creator,
          verified:
            base58PublicKey(creator.address) === base58PublicKey(umi.payer),
        }))
      )
    : undefined;

  const create =
    input.tokenStandard === TokenStandard.ProgrammableNonFungible
      ? mplCreateProgrammableNft
      : mplCreateNft;

  return create(umi, {
    ...input,
    mint: input.mint,
    collection: input.collection ? rewrapSome(input.collection) : undefined,
    printSupply: input.printSupply ? rewrapSome(input.printSupply) : undefined,
    creators,
    ruleSet: input.ruleSet
      ? rewrapSome(handlePublicKey(input.ruleSet))
      : undefined,
  });
};

export const createNftTx = makeUmiTxWrapper(getCreateNftTx);
export const createNft = makeUmiSenderWrapper(getCreateNftTx);
export const createNftAndFetch = makeUmiRequiredWrapper(
  async (nftInput: Omit<CreateNftInput, 'mint'>, umi) => {
    const mint = generateSigner(umi);

    await createNft(
      {
        ...nftInput,
        mint,
      },
      umi
    );

    return await fetchNft({ publicKey: mint.publicKey }, umi);
  }
);
