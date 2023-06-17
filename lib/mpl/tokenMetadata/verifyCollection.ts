import {
  findMetadataPda,
  verifyCollectionV1,
  VerifyCollectionV1InstructionAccounts,
} from '@metaplex-foundation/mpl-token-metadata';
import { Umi } from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiSenderWrapper, makeUmiTxWrapper } from '../makeUmiWrapper';

type VerifyCollectionInput = Omit<
  VerifyCollectionV1InstructionAccounts,
  'metadata' | 'collectionMint'
> & {
  mint: PublicKeyOptions;
  collectionMint: PublicKeyOptions;
};
const getVerifyCollectionTx = (input: VerifyCollectionInput, umi: Umi) => {
  const metadata = findMetadataPda(umi, {
    mint: handlePublicKey(input.mint),
  });

  return verifyCollectionV1(umi, {
    ...input,
    metadata,
    collectionMint: handlePublicKey(input.collectionMint),
  });
};

export const verifyCollectionTx = makeUmiTxWrapper(getVerifyCollectionTx);
export const verifyCollection = makeUmiSenderWrapper(getVerifyCollectionTx);
