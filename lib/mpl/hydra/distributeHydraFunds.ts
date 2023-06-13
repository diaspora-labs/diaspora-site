import { findAssociatedTokenPda } from '@metaplex-foundation/mpl-essentials';
import {
  distributeWallet,
  findFanoutMembershipMintVoucherPda,
  findFanoutMembershipVoucherPda,
  findFanoutMintPda,
} from '@metaplex-foundation/mpl-hydra';
import { publicKey, transactionBuilder } from '@metaplex-foundation/umi';
import { NATIVE_MINT } from '@solana/spl-token';
import { makeUmiSenderWrapper, makeUmiTxWrapper } from '../makeUmiWrapper';
import { getHoldingFromFanout } from './getHoldingFromFanout';

const nativeMint = publicKey(NATIVE_MINT.toString());

type GetDistributeInstructionType = {
  memberWallet: string;
  fanoutWallet: string;
};
const getDistributeInstruction = makeUmiTxWrapper(
  ({ fanoutWallet, memberWallet }: GetDistributeInstructionType, umi) => {
    const fanout = publicKey(fanoutWallet);
    const fanoutMintPda = findFanoutMintPda(umi, {
      fanout,
      mint: nativeMint,
    });
    const member = publicKey(memberWallet);
    const membershipVoucherPda = findFanoutMembershipVoucherPda(umi, {
      fanout,
      member,
    });
    const membershipMintPda = findFanoutMembershipMintVoucherPda(umi, {
      fanout,
      membership: member,
      mint: nativeMint,
    });
    const fanoutMintMemberTokenAccount = findAssociatedTokenPda(umi, {
      mint: nativeMint,
      owner: member,
    });

    const distributeInstruction = distributeWallet(umi, {
      member,
      fanoutMint: nativeMint,
      distributeForMint: false,
      fanout,
      fanoutForMint: fanoutMintPda,
      membershipVoucher: membershipVoucherPda,
      holdingAccount: publicKey(getHoldingFromFanout(fanoutWallet)),
      fanoutForMintMembershipVoucher: membershipMintPda,
      fanoutMintMemberTokenAccount,
    });

    return distributeInstruction;
  }
);

type DistributeHydraFundsType = Omit<
  GetDistributeInstructionType,
  'memberWallet'
> & {
  memberWallets: string[];
};
export const distributeHydraFunds = makeUmiSenderWrapper(
  ({ memberWallets, ...rest }: DistributeHydraFundsType, umi) => {
    const distributeInstructions = memberWallets.map((memberWallet) =>
      getDistributeInstruction(
        {
          memberWallet,
          ...rest,
        },
        umi
      )
    );

    return transactionBuilder().add(distributeInstructions);
  }
);
