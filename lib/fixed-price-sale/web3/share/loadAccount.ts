import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { ERROR_ACCOUNT_NOT_FOUND } from '../../interfaces/ErrorNotFound';

export async function loadAccount(
  connection: Connection,
  pubkey: PublicKey
): Promise<AccountInfo<Buffer>>;
export async function loadAccount(
  connection: Connection,
  pubkey: PublicKey,
  unsafe: true
): Promise<AccountInfo<Buffer> | null>;
export async function loadAccount(
  connection: Connection,
  pubkey: PublicKey,
  unsafe = false
) {
  const info = await connection.getAccountInfo(pubkey);
  if (!info && !unsafe) {
    throw ERROR_ACCOUNT_NOT_FOUND(pubkey);
  }
  return info;
}

export async function checkAccount(connection: Connection, pubkey: PublicKey) {
  const info = await connection.getAccountInfo(pubkey);
  return Boolean(info);
}
