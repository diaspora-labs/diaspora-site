import { Connection, DataSizeFilter, MemcmpFilter } from '@solana/web3.js';
import { Program } from '../interfaces/Program';

interface Deserializable<T> {
  deserialize(buf: Buffer, offset?: number): [T, number];
}

type FindFilter = MemcmpFilter['memcmp'] | DataSizeFilter;

const isDataSizeFilter = (filter: FindFilter): filter is DataSizeFilter =>
  (filter as DataSizeFilter).dataSize !== undefined;

export async function findAccountsAndDeserialize<T>(
  connection: Connection,
  programClass: typeof Program,
  dataClass: Deserializable<T>,
  filters: FindFilter[]
) {
  const config = {
    filters: filters.map((f) => (isDataSizeFilter(f) ? f : { memcmp: f })),
  };
  const accounts = await programClass.getProgramAccounts(connection, config);

  return accounts.reduce(
    (map, { pubkey, info }) =>
      info
        ? map.set(pubkey.toString(), dataClass.deserialize(info.data)[0])
        : map,
    new Map<string, T>()
  );
}
