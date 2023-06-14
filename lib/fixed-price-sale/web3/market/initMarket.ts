import { bignum, COption } from '@metaplex-foundation/beet';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnyPublicKey } from '../../interfaces/AnyPublicKey';
import { sendTransactions } from '../transactions';
import { createMarket } from './actions/createMarket';
import { MarketSettings } from './actions/createMarket/transactions/createMarketTransaction';

export interface InitMarketProps {
  connection: Connection;
  wallet: WalletContextState;
  store: AnyPublicKey;
  resourceMint: AnyPublicKey;
  resourceToken: AnyPublicKey;
  marketSettings: MarketSettings;
  maxSupply: COption<bignum>;
}

export const initMarket = async (params: InitMarketProps) => {
  const { connection, wallet } = params;

  const { store, resourceMint, resourceToken } = params;
  const { market, txs } = await createMarket({
    ...params,
    store: new PublicKey(store),
    resourceMint: new PublicKey(resourceMint),
    resourceToken: new PublicKey(resourceToken),
  });

  await sendTransactions(connection, wallet, txs);

  return { market: market.publicKey.toString() };
};
