import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { IFixedPrice, isEndedSale } from '../../state/sales';

import { WalletContextState } from '@solana/wallet-adapter-react';
import { prepareTransactions } from '../transactions/prepareTransactions';
import { createClaimTransaction } from './transactions/createClaimTransaction';
import { createCloseMarketTransaction } from './transactions/createCloseMarketTransaction';
import { createWithdrawTransaction } from './transactions/createWithdrawTransaction';

interface Props {
  connection: Connection;
  wallet: WalletContextState;
  sale: IFixedPrice;
  store: PublicKey;
}

export const closeMarketAndWithdraw = async ({
  connection,
  wallet,
  sale,
  store,
}: Props): Promise<Transaction[]> => {
  const txs = [];

  if (!isEndedSale(sale)) {
    const closeMarketTx = await createCloseMarketTransaction({
      market: new PublicKey(sale.id),
      connection,
      wallet,
    });
    txs.push(closeMarketTx);
  }

  const withdrawTx = await createWithdrawTransaction({
    connection,
    wallet,
    sale,
  });
  txs.push(withdrawTx);

  const claimTx = await createClaimTransaction({
    connection,
    wallet,
    store,
    sale,
  });
  txs.push(claimTx);

  const latestBlockhash = await connection.getLatestBlockhash();
  const blockHeight = await connection.getBlockHeight();
  const options = {
    feePayer: wallet.publicKey,
    blockhash: latestBlockhash.blockhash,
    lastValidBlockHeight: blockHeight,
  };
  const unsignedTxns = prepareTransactions(txs, options);

  return unsignedTxns;
};
