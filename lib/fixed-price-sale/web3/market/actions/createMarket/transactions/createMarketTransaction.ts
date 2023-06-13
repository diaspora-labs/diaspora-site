import { bignum, COption } from '@metaplex-foundation/beet';
import { createCreateMarketInstruction } from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Keypair, PublicKey } from '@solana/web3.js';
import { TransactionsBatch } from '../../../../transactions';

export interface CreateMarketTransactionProps {
  wallet: WalletContextState;
  store: PublicKey;
  sellingResource: PublicKey;
  mint: PublicKey;
  treasuryHolder: PublicKey;
  owner: PublicKey;
  treasuryOwnerBump: number;
  marketSettings: MarketSettings;
}

export interface MarketSettings {
  name: string;
  description: string;
  mutable: boolean;
  price: bignum;
  piecesInOneWallet: COption<bignum>;
  startDate: bignum;
  endDate: COption<bignum>;
  gatingTime?: number | null;
  gatingCollection?: string;
  expireOnUse?: boolean;
}

export const createMarketTransaction = ({
  store,
  wallet,
  sellingResource,
  mint,
  treasuryHolder,
  owner,
  treasuryOwnerBump,
  marketSettings,
}: CreateMarketTransactionProps) => {
  const market = Keypair.generate();

  const ix = createCreateMarketInstruction(
    {
      market: market.publicKey,
      store,
      sellingResourceOwner: wallet.publicKey!,
      sellingResource,
      mint,
      treasuryHolder,
      owner,
    },
    {
      ...marketSettings,
      treasuryOwnerBump,
      gatingConfig: null,
    }
  );

  const createMarketTx = new TransactionsBatch({
    instructions: [ix],
    signers: [market],
  });

  return {
    market,
    createMarketTx,
  };
};
