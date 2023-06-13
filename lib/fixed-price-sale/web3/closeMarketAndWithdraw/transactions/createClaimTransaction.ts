import {
  createClaimResourceInstruction,
  findVaultOwnerAddress,
} from '@metaplex-foundation/mpl-fixed-price-sale';
import { MPL_TOKEN_METADATA_PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { WalletContextState } from '@solana/wallet-adapter-react';
import {
  Connection,
  PublicKey,
  SYSVAR_CLOCK_PUBKEY,
  Transaction,
} from '@solana/web3.js';
import { IFixedPrice } from '../../../state/sales';
import { createAndSignTransaction } from '../../transactions/createAndSignTransaction';

interface ClaimProps {
  connection: Connection;
  wallet: WalletContextState;
  store: PublicKey;
  sale: IFixedPrice;
}

export const createClaimTransaction = async ({
  connection,
  wallet,
  store,
  sale,
}: ClaimProps): Promise<Transaction> => {
  const { treasuryHolder, sellingResource, vault, resource } = sale.refs;
  const walletPublicKey = wallet.publicKey!;

  const [vaultOwner, vaultOwnerBump] = await findVaultOwnerAddress(
    new PublicKey(resource),
    store
  );

  const claimToken = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    new PublicKey(resource),
    walletPublicKey
  );

  const instruction = createClaimResourceInstruction(
    {
      market: new PublicKey(sale.id),
      treasuryHolder: new PublicKey(treasuryHolder),
      sellingResource: new PublicKey(sellingResource),
      sellingResourceOwner: walletPublicKey,
      vault: new PublicKey(vault),
      metadata: new PublicKey(sale.artwork.accountAddress),
      owner: vaultOwner,
      destination: claimToken,
      tokenMetadataProgram: new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.bytes),
      clock: SYSVAR_CLOCK_PUBKEY,
    },
    {
      vaultOwnerBump,
    }
  );

  return createAndSignTransaction([instruction], connection, wallet, []);
};
