import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';

import { getMultipleAccounts } from './getMultipleAccounts';
import { Decodable, Deserializable } from './types';

export type ApplyAccountFn<T> = (address: PublicKey, data: T) => void;
export type ApplyChunkFn = (
  infos: (AccountInfo<Buffer> | null)[],
  addresses: PublicKey[]
) => unknown;

export async function loadAccountsAndDeserialize<T>(
  connection: Connection,
  dataClass: Deserializable<T> | Decodable<T>,
  addresses: PublicKey[],
  programId?: PublicKey
) {
  const accounts = new Map<string, T>();
  const fn: ApplyAccountFn<T> = (address, data) =>
    accounts.set(address.toString(), data);

  await loadAccountsByChunks(fn, connection, dataClass, addresses, programId);
  return accounts;
}

export async function loadAccountsAndDeserializeAsArray<T>(
  connection: Connection,
  dataClass: Deserializable<T> | Decodable<T>,
  addresses: PublicKey[],
  programId?: PublicKey
) {
  const accounts: (T & { address: PublicKey })[] = [];
  const fn: ApplyAccountFn<T> = (address, data) =>
    accounts.push({ address, ...data });

  await loadAccountsByChunks(fn, connection, dataClass, addresses, programId);
  return accounts;
}

export async function loadAccountsByChunks<T>(
  fn: ApplyAccountFn<T>,
  connection: Connection,
  dataClass: Deserializable<T> | Decodable<T>,
  addresses: PublicKey[],
  programId?: PublicKey
) {
  const decode = processAccountInfo(dataClass, programId);
  const chunk: ApplyChunkFn = (infos, addresses) =>
    infos.forEach((info, index) => {
      const data = decode(info, addresses[index]);
      if (data) fn(...data);
    });

  await getMultipleAccounts(connection, addresses, chunk);
}

export const processAccountInfo =
  <T>(dataClass: Deserializable<T> | Decodable<T>, programId?: PublicKey) =>
  (info: AccountInfo<Buffer> | null, address: PublicKey) => {
    try {
      if (!info || (programId && !programId.equals(info.owner))) return null;
      return [address, deserialize(dataClass, info.data)] as const;
    } catch {
      return null;
    }
  };

const deserialize = <T>(
  dataClass: Deserializable<T> | Decodable<T>,
  data: Buffer
) =>
  (dataClass as Deserializable<T>).deserialize
    ? (dataClass as Deserializable<T>).deserialize(data)[0]
    : (dataClass as Decodable<T>).decode(data);
