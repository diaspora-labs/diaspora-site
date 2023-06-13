import { Nft } from '@creator-experience/types';
import { DigitalAsset as MplDigitalAsset } from '@metaplex-foundation/mpl-token-metadata';
import { unwrapSome } from '@metaplex-foundation/umi';

export const unwrapNft = (asset: MplDigitalAsset): Nft => {
  const edition: Nft['edition'] = asset.edition
    ? {
        ...asset.edition,
        maxSupply: asset.edition.isOriginal
          ? unwrapSome(asset.edition.maxSupply)
          : null,
        supply: asset.edition.isOriginal ? asset.edition.supply : null,
        edition: 'edition' in asset.edition ? asset.edition.edition : null,
      }
    : undefined;

  return {
    ...asset,
    mint: {
      ...asset.mint,
      mintAuthority: unwrapSome(asset.mint.mintAuthority),
      freezeAuthority: unwrapSome(asset.mint.freezeAuthority),
    },
    edition: edition || undefined,
    metadata: {
      ...asset.metadata,
      creators: unwrapSome(asset.metadata.creators),
      editionNonce: unwrapSome(asset.metadata.editionNonce),
      tokenStandard: unwrapSome(asset.metadata.tokenStandard),
      collection: unwrapSome(asset.metadata.collection),
      uses: unwrapSome(asset.metadata.uses),
      collectionDetails: unwrapSome(asset.metadata.collectionDetails),
      programmableConfig: unwrapSome(asset.metadata.programmableConfig),
    },
  };
};
