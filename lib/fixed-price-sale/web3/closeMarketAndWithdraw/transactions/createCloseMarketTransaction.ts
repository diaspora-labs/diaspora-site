import { createCloseMarketInstruction } from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import {
  Connection,
  PublicKey,
  SYSVAR_CLOCK_PUBKEY,
  Transaction,
} from '@solana/web3.js';
import { createAndSignTransaction } from '../../transactions/createAndSignTransaction';

interface EndSaleProps {
  market: PublicKey;
  connection: Connection;
  wallet: WalletContextState;
}

export const createCloseMarketTransaction = async ({
  market,
  connection,
  wallet,
}: EndSaleProps): Promise<Transaction> => {
  const instruction = createCloseMarketInstruction({
    market,
    owner: wallet.publicKey!,
    clock: SYSVAR_CLOCK_PUBKEY,
  });

  return createAndSignTransaction([instruction], connection, wallet, []);
};
