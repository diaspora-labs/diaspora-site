import { getCloudflareIpfsGatewayUrl } from '@creator-experience/utils';
import { IArt } from '../../state/artworks';
import { MetadataJson } from '../createNft';
import { loadExtraContent } from '../createNft/utils';

import { IArtLight } from './combineArtwork';

export const populateArtwork = async (
  art: IArtLight | IArt,
  artworkContent?: MetadataJson
): Promise<IArt> => {
  let content: MetadataJson | null = artworkContent ?? null;
  if (!content) {
    try {
      const optimizedUrl = (art as IArtLight).uri.replace(
        'https://nftstorage.link/ipfs/',
        `${getCloudflareIpfsGatewayUrl()}/ipfs/`
      );

      content = await loadExtraContent<MetadataJson>(optimizedUrl, true);
    } catch {
      /* nope */
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { uri, ...restArt } = art as IArtLight;

  return {
    description: content?.description,
    assets: content?.properties?.files,
    ...restArt,
    image: content?.image || art.image,
    title: content?.name || art.title,
    format: content?.properties?.category || art.format,
  };
};
