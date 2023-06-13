import { bignum, COption } from '@metaplex-foundation/beet';
import { Connection, PublicKey } from '@solana/web3.js';
import { TransactionsBatch } from '../../../transactions';

import { WalletContextState } from '@solana/wallet-adapter-react';
import {
  createMarketTransaction,
  MarketSettings,
} from './transactions/createMarketTransaction';
import { createSellingResourceTransaction } from './transactions/createSellingResourceTransaction';
import { createTreasuryTransaction } from './transactions/createTreasuryTransaction';
import { createVaultTransaction } from './transactions/createVaultTransaction';

export interface CreateMarketTransactionProps {
  wallet: WalletContextState;
  connection: Connection;
  store: PublicKey;
  resourceMint: PublicKey;
  resourceToken: PublicKey;
  marketSettings: MarketSettings;
  maxSupply: COption<bignum>;
}

export const createMarket = async ({
  wallet,
  connection,
  store,
  resourceMint,
  resourceToken,
  marketSettings,
  maxSupply,
}: CreateMarketTransactionProps) => {
  const { vault, vaultOwner, vaultOwnerBump, createVaultTx } =
    await createVaultTransaction({
      resourceMint,
      store,
      connection,
      wallet,
    });

  const { sellingResource, createSellingResourceTx } =
    await createSellingResourceTransaction({
      payer: wallet,
      store,
      resourceMint,
      resourceToken,
      vault,
      owner: vaultOwner,
      vaultOwnerBump,
      maxSupply,
    });

  const {
    createTreasuryTx,
    treasuryMint,
    treasuryOwner,
    treasuryOwnerBump,
    treasuryHolder,
  } = await createTreasuryTransaction({
    sellingResource: sellingResource.publicKey,
    connection,
    wallet,
  });

  const { createMarketTx, market } = createMarketTransaction({
    store,
    wallet,
    sellingResource: sellingResource.publicKey,
    mint: treasuryMint,
    treasuryHolder: treasuryHolder.publicKey,
    owner: treasuryOwner,
    treasuryOwnerBump,
    marketSettings,
  });

  const tx = new TransactionsBatch({
    transactions: [
      ...createVaultTx.toTransactions(),
      ...createSellingResourceTx.toTransactions(),
      ...createTreasuryTx.toTransactions(),
      ...createMarketTx.toTransactions(),
    ],
    signers: [
      ...createVaultTx.signers,
      ...createSellingResourceTx.signers,
      ...createTreasuryTx.signers,
      ...createMarketTx.signers,
    ],
  });

  return {
    market,
    txs: [tx],
  };
};
