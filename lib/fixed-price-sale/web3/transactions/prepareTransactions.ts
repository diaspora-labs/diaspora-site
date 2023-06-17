import { Transaction, TransactionBlockhashCtor } from '@solana/web3.js';
import { NonNullable } from 'ts-toolbelt/out/Object/NonNullable';

import { TransactionsBatch } from './TransactionsBatch';

export const prepareTransactions = (
  txs: (Transaction | TransactionsBatch | undefined)[],
  options: NonNullable<TransactionBlockhashCtor, 'recentBlockhash'>
) => {
  const mergedTx = TransactionsBatch.merge(txs).combine(options);

  try {
    // check merged Tx is small enougth to send
    mergedTx.serialize({
      requireAllSignatures: true,
      verifySignatures: false,
    });
    return [mergedTx];
  } catch {
    /* nope */
  }

  return txs.reduce((txs, tx) => {
    if (!tx) return txs;
    if (tx instanceof TransactionsBatch) {
      if (!tx.transactions.length) return txs;
      return [...txs, tx.combine(options)];
    }
    tx.recentBlockhash = options.blockhash;
    return [...txs, tx];
  }, [] as Transaction[]);
};
