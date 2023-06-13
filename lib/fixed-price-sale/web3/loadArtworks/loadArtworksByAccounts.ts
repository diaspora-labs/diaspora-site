import { getUmi } from '@creator-experience/mpl';
import { excludesFalsy } from '@creator-experience/utils';
import {
  Metadata,
  safeFetchAllMetadata,
} from '@metaplex-foundation/mpl-token-metadata';
import { publicKey } from '@metaplex-foundation/umi';
import { Connection, PublicKey } from '@solana/web3.js';
import { IArt } from '../../state/artworks';
import { TokenAccount } from '../share/types';
import { loadArtworks } from './loadArtworks';
import { populateArtwork } from './populateArtwork';
import { findMetadataAddress } from './utils';

export const loadArtworksByAccounts = async ({
  connection,
  tokens,
}: {
  connection: Connection;
  tokens: TokenAccount[];
}): Promise<IArt[]> => {
  const accountByMint = getAccountByMint(tokens);

  const metadataAddresses = (
    await Promise.all(tokens.map(({ mint }) => findMetadataAddress(mint)))
  ).map(([publicKey]) => publicKey);

  const multipleAccounts = await safeFetchAllMetadata(
    getUmi(),
    metadataAddresses.map((addr) => publicKey(addr.toBase58()))
  );

  const metadataAccounts: [PublicKey, Metadata][] = multipleAccounts.map(
    (account) => {
      return [new PublicKey(account.publicKey.bytes), account];
    }
  );

  const results = await Promise.all(
    metadataAccounts.map((account) =>
      loadArtworks({ account, accountByMint }).catch(() => null)
    )
  );

  const lightArtworks = results.filter(excludesFalsy);

  return Promise.all(lightArtworks.map((art) => populateArtwork(art)));
};

const getAccountByMint = (tokens: TokenAccount[]) =>
  tokens.reduce<Map<string, TokenAccount>>(
    (prev: Map<string, TokenAccount>, token: TokenAccount) => {
      prev.set(token.mint.toBase58(), token);
      return prev;
    },
    new Map<string, TokenAccount>()
  );
