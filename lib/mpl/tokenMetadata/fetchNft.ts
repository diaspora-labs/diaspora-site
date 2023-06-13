import {
  fetchAllDigitalAssetByCreator as mplFetchAllDigitalAssetByCreator,
  fetchAllDigitalAssetByOwner,
  fetchDigitalAsset as mplFetchDigitalAsset,
} from '@metaplex-foundation/mpl-token-metadata';
import { findCandyMachineAuthorityPda } from '../candyMachine/findCandyMachineAuthorityPda';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiRpcWrapper, makeUmiWrapper } from '../makeUmiWrapper';
import { addJson, batchAddJson } from './fetchJson';
import { unwrapNft } from './unwrapNft';

type FetchNftInput = {
  publicKey: PublicKeyOptions;
  loadJson?: boolean;
};

export const fetchNft = makeUmiRpcWrapper(
  async ({ publicKey, loadJson = true }: FetchNftInput, umi, rpcOptions) => {
    const asset = await mplFetchDigitalAsset(
      umi,
      handlePublicKey(publicKey),
      rpcOptions
    );
    const unwrapped = unwrapNft(asset);

    return loadJson ? await addJson(unwrapped) : unwrapped;
  }
);

export const safeFetchNft = makeUmiWrapper(
  async (input: FetchNftInput, umi) => {
    try {
      return await fetchNft(input, umi);
    } catch (e) {
      return null;
    }
  }
);

export const fetchNftsByOwner = makeUmiRpcWrapper(
  async ({ publicKey, loadJson = true }: FetchNftInput, umi, rpcOptions) => {
    const assets = await fetchAllDigitalAssetByOwner(
      umi,
      handlePublicKey(publicKey),
      rpcOptions
    );
    const nfts = assets.map(unwrapNft);

    if (loadJson) {
      return await batchAddJson({ assets: nfts });
    }

    return nfts;
  }
);

export const fetchNftsByCm = makeUmiRpcWrapper(
  async (candyMachinePublicKey: PublicKeyOptions, umi, rpcOptions) => {
    const cmPda = findCandyMachineAuthorityPda(
      handlePublicKey(candyMachinePublicKey),
      umi
    );

    const assets = await mplFetchAllDigitalAssetByCreator(
      umi,
      cmPda,
      rpcOptions
    );

    return assets.map(unwrapNft);
  }
);
