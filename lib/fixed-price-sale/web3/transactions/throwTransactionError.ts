import { errorFromCode as getFPError } from '@metaplex-foundation/mpl-fixed-price-sale/dist/src/generated/errors';
import { TransactionError, TransactionSignature } from '@solana/web3.js';

interface ITxError {
  InstructionError: [number, string | { Custom: number }];
}

export function throwTransactionError(
  txId: TransactionSignature,
  error: TransactionError
) {
  if (typeof error === 'string') {
    throw new Error(error);
  }

  const msg = (error as ITxError)?.InstructionError?.[1];
  if (typeof msg === 'string') {
    throw new Error(`Error with message: "${msg}"`);
  }

  const code = msg?.Custom;
  if (code) {
    const codeError = getFPError(code);
    throw new Error(codeError?.message);
  }

  throw new Error(`Raw transaction ${txId} failed`);
}
