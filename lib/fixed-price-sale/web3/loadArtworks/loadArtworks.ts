import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { base58PublicKey } from '@metaplex-foundation/umi';
import { PublicKey } from '@solana/web3.js';
import { ArtType } from '../../state/artworks';
import { TokenAccount } from '../share/types';

import { combineArtwork, IArtLight } from './combineArtwork';
import { loadArtworkEdition } from './loadArtworkEdition';

export const loadArtworks = async ({
  account,
  accountByMint,
}: {
  account: [PublicKey, Metadata];
  accountByMint: Map<string, TokenAccount>;
}): Promise<undefined | IArtLight> => {
  const [publicKey, metadata] = account;
  const { mint } = metadata;

  const editionProps = await loadArtworkEdition({
    mint: new PublicKey(mint.bytes),
  });
  // We ignore non-master editions
  if (editionProps?.type !== ArtType.Master) {
    return;
  }

  const token = accountByMint.get(base58PublicKey(mint));

  if (!token) {
    return;
  }

  return combineArtwork({
    editionProps,
    token,
    metadata,
    pubkey: publicKey,
  });
};
