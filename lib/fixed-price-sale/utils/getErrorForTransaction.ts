import { Connection } from '@solana/web3.js';

export const getErrorForTransaction = async (
  connection: Connection,
  txid: string
) => {
  // wait for all confirmation before geting transaction
  const tx = await connection.getTransaction(txid, {
    commitment: 'confirmed',
    maxSupportedTransactionVersion: 0,
  });

  const errors: string[] = [];
  if (tx?.meta && tx.meta.logMessages) {
    tx.meta.logMessages.forEach((log) => {
      const regex = /error: (.*)/gm;
      let m;
      while ((m = regex.exec(log)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        if (m.length > 1 && !errors.includes(m[1])) {
          errors.push(m[1]);
        }
      }
    });
  }

  return errors;
};

export const getErrorsFromError = (error: Error) => {
  const errors: string[] = [];

  const regex = /error: (.*)/gm;
  let m;
  while ((m = regex.exec(error.message)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    if (m.length > 1 && !errors.includes(m[1])) {
      errors.push(m[1]);
    }
  }

  return errors;
};
