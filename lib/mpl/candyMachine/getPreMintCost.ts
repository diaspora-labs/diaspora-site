import { CREATE_TOKEN_METADATA_FEE_SOL } from '@creator-experience/constants';
import { lamportsToSol } from '@creator-experience/utils';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import { defaultPublicKey } from '@metaplex-foundation/umi';
import { getUmi } from '../getUmi';
import { mintFromCandyMachineTx } from './mintFromCandyMachine';

const TX_COST = 0.000005;
const BUFFER = 0.001;

type PreMintCostInput = {
  amount: number;
  enabled: boolean;
  tokenStandard: TokenStandard;
  groupLabel?: string;
};

export const getPreMintCost = async ({
  amount,
  enabled,
  tokenStandard,
  groupLabel,
}: PreMintCostInput) => {
  if (!enabled) {
    return 0;
  }

  const fakePublicKey = defaultPublicKey();
  const mintTx = mintFromCandyMachineTx({
    candyMachineKey: fakePublicKey,
    collectionMint: fakePublicKey,
    collectionUpdateAuthority: fakePublicKey,
    owner: fakePublicKey,
    tokenStandard,
    groupLabel,
  });

  const rentCost = await mintTx.getRentCreatedOnChain(getUmi());
  const rentSol = lamportsToSol(Number(rentCost.basisPoints));

  return amount * (rentSol + TX_COST + BUFFER + CREATE_TOKEN_METADATA_FEE_SOL);
};
