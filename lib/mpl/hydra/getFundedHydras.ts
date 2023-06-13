import { arrayToBatches, getConnection } from '@creator-experience/utils';
import { PublicKey } from '@solana/web3.js';
import pMap from 'p-map';
import { getHoldingFromFanout } from './getHoldingFromFanout';
import { getMinHydraCrankBalance } from './getMinHydraCrankBalance';

const maxRequestsPerBatch = 100;

export const getFundedHydras = async (
  fanoutWallets: string[]
): Promise<string[]> => {
  const holdingWallets = fanoutWallets.map((wallet) =>
    getHoldingFromFanout(wallet)
  );
  const batches = arrayToBatches(holdingWallets, maxRequestsPerBatch);

  const connection = getConnection();
  const fetchAccountsForBatch = async (batch: string[]) =>
    connection.getMultipleAccountsInfo(
      batch.map((item) => new PublicKey(item))
    );

  const nestedAccounts = await pMap(batches, fetchAccountsForBatch, {
    concurrency: 5,
  });
  const accounts = nestedAccounts.flat();

  const funded = accounts.reduce<string[]>((acc, account, idx) => {
    if (account && account.lamports >= getMinHydraCrankBalance()) {
      return [...acc, fanoutWallets[idx]];
    }

    return acc;
  }, []);

  return funded;
};
