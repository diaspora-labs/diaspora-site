import { excludesFalsy } from '@creator-experience/utils';
import {
  findPrimaryMetadataCreatorsAddress,
  PrimaryMetadataCreators,
} from '@metaplex-foundation/mpl-fixed-price-sale';
import { Connection, PublicKey } from '@solana/web3.js';
import { ArtType, IArt } from '../../state/artworks';
import { MetadataJsonCreator } from '../createNft';
import { loadAccountsAndDeserialize } from '../share/loadAccountsAndDeserialize';

export const loadPrimaryCreatorsForArtworks = async (
  connection: Connection,
  artworks: IArt[]
) => {
  const artToPrimaryCreatorsMap = new Map<string, string>();

  const primaryCreatorsPDAs = await Promise.all(
    artworks.map(async ({ id, type, accountAddress }) => {
      if (type === ArtType.Master) {
        const [address] = await findPrimaryMetadataCreatorsAddress(
          new PublicKey(accountAddress)
        );
        artToPrimaryCreatorsMap.set(id, address.toString());
        return address;
      }
      return null;
    })
  );

  const primaryCreatorsMap =
    await loadAccountsAndDeserialize<PrimaryMetadataCreators>(
      connection,
      PrimaryMetadataCreators,
      primaryCreatorsPDAs.filter(excludesFalsy)
    );

  const primaryCreatorsByArtwork = new Map<string, MetadataJsonCreator[]>();

  artworks.forEach(({ id }) => {
    const address = artToPrimaryCreatorsMap.get(id);
    const primaryCreators = address
      ? primaryCreatorsMap.get(address)
      : undefined;

    if (primaryCreators) {
      primaryCreatorsByArtwork.set(
        id,
        primaryCreators.creators.map((c) => ({
          ...c,
          address: c.address.toString(),
        }))
      );
    }
  });

  return primaryCreatorsByArtwork;
};

export const loadPrimaryCreators = async (
  connection: Connection,
  artwork: IArt
) => {
  const primaryCreatorsMap = await loadPrimaryCreatorsForArtworks(connection, [
    artwork,
  ]);
  return primaryCreatorsMap.get(artwork.id) || [];
};
