import { findPayoutTicketAddress } from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';

export const isSaleWithdrawn = async ({
  connection,
  marketKey,
  wallet,
}: {
  connection: Connection;
  marketKey: string;
  wallet: WalletContextState;
}) => {
  const [payoutTicket] = await findPayoutTicketAddress(
    new PublicKey(marketKey),
    wallet.publicKey!
  );

  const payoutAccount = await connection.getAccountInfo(payoutTicket);

  return Boolean(payoutAccount);
};
