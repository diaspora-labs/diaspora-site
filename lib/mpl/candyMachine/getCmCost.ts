import { DefaultGuardSetArgs, GuardGroupArgs } from '@creator-experience/types';
import {
  getConnection,
  getMetadataCost,
  lamportsToSol,
} from '@creator-experience/utils';
import { CandyGuard } from '@metaplex-foundation/mpl-candy-guard';
import {
  CandyGuardProgram,
  getCandyMachineSize,
  getGuardGroupSerializer,
  getGuardSetSerializer,
} from '@metaplex-foundation/mpl-candy-machine';
import { CandyMachineData } from '@metaplex-foundation/mpl-candy-machine-core';
import { publicKey, some } from '@metaplex-foundation/umi';
import { getUmi } from '../getUmi';
import { rewrapGuards } from './unwrapGuards';

const TRANSACTION_FEE_SOL = 0.000005;
const COLLECTION_PDA_COST = 0.003; // Assume there is a collection being set.
const GUARD_ROUTE_COST = 0.003; // Estimate of the cost to create a guard route

const MAX_CONFIG_LINES_PER_TRANSACTION = 4; // max config line size is the ceiling of 1000 (max config line transaction size) / 240 bytes( 8(vector length indicator) + 200(max uri length) + 32(max name length))

export const getCmCost = async (
  itemCount: number,
  hasCollectionImage: boolean,
  currentUser: string,
  groupGuards: GuardGroupArgs<DefaultGuardSetArgs>[] | undefined,
  mainGuard: Partial<DefaultGuardSetArgs>
) => {
  const metadataCost = await getMetadataCost();
  const collectionCost = hasCollectionImage ? metadataCost : 0;

  const data: CandyMachineData = {
    // a default candy machine with max uri lenth
    itemsAvailable: itemCount,
    symbol: 'SOL',
    sellerFeeBasisPoints: 0,
    maxSupply: 0,
    isMutable: true,
    creators: Array(5).fill(publicKey(currentUser)),
    configLineSettings: {
      prefixName: '',
      nameLength: 32,
      prefixUri: '',
      uriLength: 200,
      isSequential: false,
    },
    hiddenSettings: null,
  };

  const connection = getConnection();
  const minBalance: number = await connection.getMinimumBalanceForRentExemption(
    getCandyMachineSize(
      Number(data.itemsAvailable),
      some({
        nameLength: data.configLineSettings?.nameLength || 0,
        uriLength: data.configLineSettings?.uriLength || 0,
      })
    )
  );

  const umi = getUmi();
  const candyGuardProgrm = umi.programs.get<CandyGuardProgram>('mplCandyGuard');
  const mainGuardSize = getGuardSetSerializer(umi, candyGuardProgrm).serialize(
    rewrapGuards(mainGuard)
  ).byteLength;
  const groupSize = (groupGuards || []).reduce<number>((acc, curr) => {
    const currSize = getGuardGroupSerializer(umi, candyGuardProgrm).serialize({
      ...curr,
      guards: rewrapGuards(curr.guards),
    });

    return acc + currSize.byteLength;
  }, 0);

  const guardSize =
    mainGuardSize +
    groupSize +
    85 +
    (4 + 8 + 6 + CandyGuard.byteSize) * (groupGuards?.length ?? 0 + 1);

  const guardCost = await connection.getMinimumBalanceForRentExemption(
    guardSize
  );

  const transactions =
    itemCount > MAX_CONFIG_LINES_PER_TRANSACTION
      ? Math.ceil(itemCount / MAX_CONFIG_LINES_PER_TRANSACTION)
      : 1; // calculate the upper bound of transactions
  const transactionsCostSol = transactions * TRANSACTION_FEE_SOL;

  const hasFreeze = [
    mainGuard,
    ...(groupGuards || []).map((entry) => entry.guards),
  ].some((g) => g.freezeSolPayment || g.freezeTokenPayment);
  // Padding the freeze to account for multiple PDAs
  const freezeCost = hasFreeze
    ? (GUARD_ROUTE_COST + TRANSACTION_FEE_SOL) * 5
    : 0;

  return (
    lamportsToSol(minBalance) +
    lamportsToSol(guardCost) +
    collectionCost +
    COLLECTION_PDA_COST +
    freezeCost +
    transactionsCostSol +
    // padding to account for extra costs associated with pNFT CMs
    0.001
  );
};
