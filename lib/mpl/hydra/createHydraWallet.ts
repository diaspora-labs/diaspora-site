import { lamportsToSol } from '@creator-experience/utils';
import {
  addMemberWallet,
  findFanoutNativeAccountPda,
  findFanoutPda,
  init,
  MembershipModel,
} from '@metaplex-foundation/mpl-hydra';
import {
  base58PublicKey,
  publicKey,
  transactionBuilder,
  TransactionBuilder,
  Umi,
} from '@metaplex-foundation/umi';
import { makeUmiRequiredWrapper } from '../makeUmiWrapper';
import { sendAndConfirm } from '../sendAndConfirm';

const transactionFee = 0.000005;

const generateHydraWalletTransaction = (
  umiContext: Umi,
  { creatorWallet, metaplexWallet, feePercentage }: CreateWalletInputType
): {
  transaction: TransactionBuilder;
  fanout: string;
  holding: string;
} => {
  const name = `Creator Studio: ${Date.now()}`;
  // Hydra does not allow partial shares,
  // this will allow percentages up to two decimal points
  const totalShares = 100 * 100;
  const creatorShares = totalShares - feePercentage * 100;
  const metaplexShares = totalShares - creatorShares;

  const fanoutPda = findFanoutPda(umiContext, { name });

  const initInstruction = init(umiContext, {
    name,
    model: MembershipModel.Wallet,
    totalShares,
    authority: umiContext.payer,
  });

  const [mpShareInstruction, creatorShareInstruction] = [
    { wallet: metaplexWallet, shares: metaplexShares },
    { wallet: creatorWallet, shares: creatorShares },
  ].map((entry) => {
    return addMemberWallet(umiContext, {
      shares: entry.shares,
      member: publicKey(entry.wallet),
      fanout: fanoutPda,
      authority: umiContext.payer,
    });
  });

  const transaction = transactionBuilder()
    .add(initInstruction)
    .add(mpShareInstruction)
    .add(creatorShareInstruction);

  const nativePda = findFanoutNativeAccountPda(umiContext, {
    fanout: fanoutPda,
  });

  return {
    transaction,
    fanout: base58PublicKey(fanoutPda),
    holding: base58PublicKey(nativePda),
  };
};

const getHydraCostInSol = async (
  transaction: TransactionBuilder,
  umiContext: Umi
): Promise<number> => {
  const wrappedAmount = await transaction.getRentCreatedOnChain(umiContext);

  return lamportsToSol(Number(wrappedAmount.basisPoints));
};

type CreateWalletInputType = {
  creatorWallet: string;
  metaplexWallet: string;
  feePercentage: number;
};
export const createHydraWallet = makeUmiRequiredWrapper(
  async (input: CreateWalletInputType, umi) => {
    const { fanout, holding, transaction } = generateHydraWalletTransaction(
      umi,
      input
    );

    const hydraCost = await getHydraCostInSol(transaction, umi);
    const costInSol = hydraCost + transactionFee;

    const send = () => sendAndConfirm(transaction, umi);

    return { send, costInSol, fanout, holding };
  }
);
