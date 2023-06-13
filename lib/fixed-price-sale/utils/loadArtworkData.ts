import { getUmi } from '@creator-experience/mpl';
import { Art } from '@creator-experience/types';
import {
  findTradeHistoryAddress,
  Market,
  SellingResource,
  TradeHistory,
} from '@metaplex-foundation/mpl-fixed-price-sale';
import {
  fetchMetadata,
  findMetadataPda,
  JsonMetadata,
} from '@metaplex-foundation/mpl-token-metadata';
import { publicKey, Umi } from '@metaplex-foundation/umi';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { loadArtworkEdition } from './loadArtworkEdition';
import { loadExtraContent } from './loadExtraContent';

export const loadArtworkData = async ({
  connection,
  umi = getUmi(),
  marketKey,
  wallet,
}: {
  connection: Connection;
  umi?: Umi;
  marketKey: PublicKey;
  wallet?: WalletContextState;
}): Promise<undefined | Art> => {
  const marketAccount = await connection.getAccountInfo(marketKey, {
    commitment: 'confirmed',
  });

  if (!marketAccount) {
    throw new Error('Market Account not found');
  }
  const [market] = Market.fromAccountInfo(marketAccount);

  const sellingResourceAccount = await connection.getAccountInfo(
    market.sellingResource,
    { commitment: 'confirmed' }
  );
  const [sellingResource] = SellingResource.fromAccountInfo(
    sellingResourceAccount!
  );

  const mint = sellingResource.resource;

  const pda = findMetadataPda(umi, { mint: publicKey(mint.toBase58()) });
  const metadataAccount = await fetchMetadata(umi, pda, {
    commitment: 'confirmed',
  });
  const editionProps = await loadArtworkEdition({ umi, mint });
  const artworkContent = await loadExtraContent<JsonMetadata>(
    metadataAccount.uri
  );

  let itemsMinted = 0;
  if (wallet?.publicKey) {
    const [tradeHistoryAccount] = await findTradeHistoryAddress(
      wallet.publicKey,
      marketKey
    );
    try {
      const tradeHistory = await TradeHistory.fromAccountAddress(
        connection,
        tradeHistoryAccount
      );
      itemsMinted = Number(tradeHistory.alreadyBought);
    } catch (error) {
      // do nothing
    }
  }

  return {
    id: new PublicKey(metadataAccount.publicKey.bytes),
    marketKey,
    market,
    sellingResource,
    mint,
    image: artworkContent.image!,
    external_url: artworkContent.external_url,
    itemsMinted,
    mintLimitReached: itemsMinted === Number(market.piecesInOneWallet),
    ...editionProps,
  };
};
