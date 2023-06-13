import { transferSol } from '@metaplex-foundation/mpl-essentials';
import { sol, Umi } from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from './handlePublicKey';
import { makeUmiSenderWrapper, makeUmiTxWrapper } from './makeUmiWrapper';

type FundWalletInput = {
  destination: PublicKeyOptions;
  amountSol: number;
};
const getFundWalletTx = (
  { destination, amountSol }: FundWalletInput,
  umi: Umi
) => {
  return transferSol(umi, {
    destination: handlePublicKey(destination),
    amount: sol(amountSol),
  });
};

export const fundWalletTx = makeUmiTxWrapper(getFundWalletTx);
export const fundWallet = makeUmiSenderWrapper(getFundWalletTx);
