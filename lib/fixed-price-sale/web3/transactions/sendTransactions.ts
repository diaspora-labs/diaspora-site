import { WalletContextState } from '@solana/wallet-adapter-react';
import {
  Connection,
  Transaction,
  TransactionError,
  TransactionSignature,
} from '@solana/web3.js';
import { prepareTransactions } from './prepareTransactions';
import { throwTransactionError } from './throwTransactionError';
import { TransactionsBatch } from './TransactionsBatch';
import { waitConfirmation } from './waitConfirmation';

export async function sendTransactions(
  connection: Connection,
  wallet: WalletContextState,
  txs: (Transaction | TransactionsBatch | undefined)[],
  retry = 1
) {
  if (!wallet.signAllTransactions) {
    throw new Error('no wallet, unable to send transaction');
  }

  const txIds: TransactionSignature[] = [];
  let error: TransactionError | Error | null | undefined;

  const latestBlockhash = await connection.getLatestBlockhash();
  const blockHeight = await connection.getBlockHeight();
  const options = {
    feePayer: wallet.publicKey,
    blockhash: latestBlockhash.blockhash,
    lastValidBlockHeight: blockHeight,
  };
  const unsignedTxns = prepareTransactions(txs, options);

  if (!unsignedTxns.length) {
    return txIds;
  }

  const signedTxns = await wallet.signAllTransactions(unsignedTxns);

  for (let index = 0; index < signedTxns.length; index++) {
    const tx = signedTxns[index];
    const rawTx = tx.serialize();
    const txId = await connection.sendRawTransaction(rawTx, {
      skipPreflight: true,
    });

    error = await waitConfirmation(connection, rawTx, txId);
    if (error) {
      if (
        retry &&
        (error as Error).name === 'TransactionExpiredBlockheightExceededError'
      ) {
        const nextTxIds = await sendTransactions(
          connection,
          wallet,
          signedTxns.slice(index),
          retry - 1
        );
        txIds.push(...nextTxIds);
        break;
      }

      throwTransactionError(txId, error);
    }
    txIds.push(txId);
  }

  return txIds;
}
