import { SaleState } from '@creator-experience/types';
import { lamportsToSol } from '@creator-experience/utils';
import {
  Market,
  MarketState,
  SellingResource,
} from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { mapFromMarketState } from '../../../state/sales';
import { parseBN } from '../../../utils';
import { isSaleWithdrawn } from '../../market/utils/isSaleWithdrawn';
import { MarketSale } from '../types';

dayjs.extend(isSameOrBefore);

export const combineMarket = async (
  market: Market,
  sellingResource: SellingResource,
  pubkey: string,
  connection: Connection,
  wallet: WalletContextState
): Promise<MarketSale> => {
  const price = parseBN(market.price, lamportsToSol);
  const supply = parseBN(sellingResource.supply);
  const earnings = price * supply;

  const startDate = parseBN(market.startDate);
  const endDate = parseBN(market.endDate);

  const piecesInOneWallet = parseBN(market.piecesInOneWallet);
  const maxSupply = parseBN(sellingResource.maxSupply);
  const isSoldOut = (maxSupply || -1) - Number(sellingResource.supply) === 0;

  const isMarketStarted =
    !!startDate &&
    dayjs.unix(startDate).isSameOrBefore(dayjs()) &&
    [MarketState.Active, MarketState.Created].includes(market.state);
  const mState = isMarketStarted ? MarketState.Active : market.state;
  const state = isSoldOut ? SaleState.SoldOut : mapFromMarketState(mState);

  const statusesShouldCheckWithdraw = [
    MarketState.Ended,
    MarketState.Created,
    MarketState.Active,
  ];

  const isWithdrawn =
    statusesShouldCheckWithdraw.includes(market.state) &&
    (await isSaleWithdrawn({
      connection,
      marketKey: pubkey.toString(),
      wallet,
    }));

  const gate = market.gatekeeper
    ? {
        collection: market.gatekeeper.collection.toString(),
        expireOnUse: market.gatekeeper.expireOnUse,
        gatingTime: parseBN(market.gatekeeper.gatingTime),
      }
    : undefined;

  return {
    id: pubkey.toString(),
    state,
    price,
    earnings,
    startDate,
    endDate,
    piecesInOneWallet,
    maxSupply,
    gate,
    isWithdrawn: Boolean(isWithdrawn),
    refs: {
      sellingResource: market.sellingResource.toString(),
      treasuryHolder: market.treasuryHolder.toString(),
      treasuryMint: market.treasuryMint.toString(),
      vault: sellingResource.vault.toString(),
      resource: sellingResource.resource.toString(),
      seller: market.owner.toString(),
    },
  };
};
