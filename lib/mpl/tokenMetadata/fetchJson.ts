export type Nft = any;

// import { Nft } from '@creator-experience/types';
// import { getCloudflareIpfsGatewayUrl } from '@creator-experience/utils';
import { JsonMetadata } from "@metaplex-foundation/mpl-token-metadata";
import pMap from "p-map";

export const fetchJson = async (uri: string) => {
  try {
    if (!uri) {
      return null;
    }

    // const optimizedUrl = uri.replace(
    //   'https://nftstorage.link/ipfs/',
    //   `${getCloudflareIpfsGatewayUrl()}/ipfs/`
    // );

    const result = await fetch(uri);
    const json = await result.json();

    return json as JsonMetadata;
  } catch (e) {
    return null;
  }
};

export const addJson = async (asset: Nft): Promise<Nft> => {
  const json = await fetchJson(asset.metadata.uri);

  return {
    ...asset,
    json: json || undefined,
  };
};

type BatchAddJsonInput = {
  assets: Nft[];
  concurrency?: number;
};
export const batchAddJson = async ({
  assets,
  concurrency = 20,
}: BatchAddJsonInput): Promise<Nft[]> => {
  const worker = (asset: Nft) => addJson(asset);
  const result = await pMap(assets, worker, { concurrency });

  return result.filter((entry) => !!entry.json);
};
