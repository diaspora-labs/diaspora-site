import { bignum, COption } from '@metaplex-foundation/beet';
import { createInitSellingResourceInstruction } from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Keypair, PublicKey } from '@solana/web3.js';
import {
  findEditionAddress,
  findMetadataAddress,
} from '../../../../loadArtworks/utils';
import { TransactionsBatch } from '../../../../transactions';

export interface CreateInitSellingResourceTransactionProps {
  payer: WalletContextState;
  store: PublicKey;
  resourceMint: PublicKey;
  vault: Keypair;
  owner: PublicKey;
  resourceToken: PublicKey;
  vaultOwnerBump: number;
  maxSupply: COption<bignum>;
}

export const createSellingResourceTransaction = async ({
  payer,
  store,
  resourceMint,
  vault,
  owner,
  resourceToken,
  vaultOwnerBump,
  maxSupply,
}: CreateInitSellingResourceTransactionProps) => {
  const sellingResource = Keypair.generate();

  const [masterEdition, masterEditionBump] = await findEditionAddress(
    resourceMint
  );

  const [metadataPDA] = await findMetadataAddress(resourceMint);

  const ix = createInitSellingResourceInstruction(
    {
      store,
      admin: payer.publicKey!,
      sellingResource: sellingResource.publicKey,
      sellingResourceOwner: payer.publicKey!,
      masterEdition,
      resourceMint,
      resourceToken,
      vault: vault.publicKey,
      owner,
      metadata: metadataPDA,
    },
    {
      masterEditionBump,
      vaultOwnerBump,
      maxSupply,
    }
  );

  const createSellingResourceTx = new TransactionsBatch({
    instructions: [ix],
    signers: [sellingResource],
  });

  return {
    sellingResource,
    createSellingResourceTx,
  };
};
