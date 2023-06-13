import { findTreasuryOwnerAddress } from '@metaplex-foundation/mpl-fixed-price-sale';
import { NATIVE_MINT } from '@solana/spl-token';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { createTokenAccount } from '../../../../share/createTokenAccount';

export interface CreateTreasuryProps {
  connection: Connection;
  wallet: WalletContextState;
  sellingResource: PublicKey;
}

export const createTreasuryTransaction = async ({
  sellingResource,
  connection,
  wallet,
}: CreateTreasuryProps) => {
  const treasuryMint = NATIVE_MINT;
  const [treasuryOwner, treasuryOwnerBump] = await findTreasuryOwnerAddress(
    treasuryMint,
    sellingResource
  );

  const { tokenAccount: treasuryHolder, tx: createTreasuryTx } =
    await createTokenAccount({
      payer: wallet.publicKey!,
      connection,
      mint: treasuryMint,
      owner: treasuryOwner,
    });

  return {
    treasuryOwnerBump,
    treasuryHolder,
    treasuryOwner,
    treasuryMint,
    createTreasuryTx,
  };
};
