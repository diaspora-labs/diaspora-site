import {
  createSavePrimaryMetadataCreatorsInstruction,
  findPrimaryMetadataCreatorsAddress,
} from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { IArtCreator } from '../../../state/artworks';

interface CreatePrimaryMetadataCreatorsParams {
  wallet: WalletContextState;
  creators: IArtCreator[];
  metadata: PublicKey;
}

export const createPrimaryMetadataCreators = async ({
  wallet,
  creators,
  metadata,
}: CreatePrimaryMetadataCreatorsParams): Promise<TransactionInstruction> => {
  const [primaryMetadataCreators, primaryMetadataCreatorsBump] =
    await findPrimaryMetadataCreatorsAddress(metadata);

  const createPrimaryMetadataCreatorsInstruction =
    createSavePrimaryMetadataCreatorsInstruction(
      {
        admin: wallet.publicKey!,
        metadata,
        primaryMetadataCreators,
      },
      {
        primaryMetadataCreatorsBump,
        creators: creators.map((creator) => ({
          ...creator,
          address: new PublicKey(creator.address),
        })),
      }
    );

  return createPrimaryMetadataCreatorsInstruction;
};
