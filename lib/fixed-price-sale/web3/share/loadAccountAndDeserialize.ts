import { Connection, PublicKey } from '@solana/web3.js';

import { ERROR_ACCOUNT_NOT_FOUND } from '../../interfaces/ErrorNotFound';
import { loadAccount } from './loadAccount';
import { processAccountInfo } from './loadAccountsAndDeserialize';
import { Decodable, Deserializable } from './types';

export async function loadAccountAndDeserialize<T>(
  connection: Connection,
  dataClass: Deserializable<T> | Decodable<T>,
  pubkey: PublicKey,
  programId?: PublicKey
) {
  const accountInfo = await loadAccount(connection, pubkey);
  const data = processAccountInfo(dataClass, programId)(accountInfo, pubkey);
  if (!data) {
    throw ERROR_ACCOUNT_NOT_FOUND(pubkey);
  }
  return data[1];
}
