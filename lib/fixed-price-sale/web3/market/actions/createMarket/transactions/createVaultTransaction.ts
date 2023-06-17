import { findVaultOwnerAddress } from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { createTokenAccount } from '../../../../share/createTokenAccount';

export interface InitSellingResourceProps {
  resourceMint: PublicKey;
  store: PublicKey;
  connection: Connection;
  wallet: WalletContextState;
}

export const createVaultTransaction = async ({
  resourceMint,
  store,
  connection,
  wallet,
}: InitSellingResourceProps) => {
  const [vaultOwner, vaultOwnerBump] = await findVaultOwnerAddress(
    resourceMint,
    store
  );

  const { tokenAccount: vault, tx: createVaultTx } = await createTokenAccount({
    payer: wallet.publicKey!,
    mint: resourceMint,
    connection,
    owner: vaultOwner,
  });

  return {
    vault,
    vaultOwner,
    vaultOwnerBump,
    createVaultTx,
  };
};
