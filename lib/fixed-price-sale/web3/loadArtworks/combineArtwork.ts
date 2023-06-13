import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { base58PublicKey, unwrapSome } from '@metaplex-foundation/umi';
import { PublicKey } from '@solana/web3.js';
import { IArt } from '../../state/artworks';
import { parseBN } from '../../utils/parseBN';
import { TokenAccount } from '../share/types';

import { ArtEditionProps } from './loadArtworkEdition';

export const DEFAULT_ART_IMAGE =
  'https://explorer.solana.com/static/media/dark-solana-logo.fa522d66.svg';

interface Params {
  pubkey: PublicKey;
  metadata: Metadata;
  editionProps: ArtEditionProps;
  token: TokenAccount;
}

export type IArtLight = Omit<
  IArt,
  'description' | 'assets' | 'properties' | 'animationUrl'
> & { uri: string };

export const combineArtwork = ({
  pubkey,
  metadata,
  editionProps,
  token,
}: Params): IArtLight => ({
  id: base58PublicKey(metadata.mint),
  mint: base58PublicKey(metadata.mint),
  accountAddress: pubkey.toString(),
  token: token.address.toString(),
  tokenAmount: parseBN(token.amount),
  ownerAddress: token.owner.toString(),
  primarySaleHappened: metadata.primarySaleHappened,
  sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
  creators: (unwrapSome(metadata.creators) ?? []).map((c) => ({
    ...c,
    address: base58PublicKey(c.address),
  })),
  ...editionProps,
  uri: metadata.uri,
  title: metadata.name,
  image: DEFAULT_ART_IMAGE,
  format: 'image',
});
