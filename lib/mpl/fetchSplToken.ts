import {
  deserializeMint,
  getSplTokenProgramId,
  Mint,
} from '@metaplex-foundation/mpl-essentials';
import {
  deserializeMetadata,
  findMetadataPda,
  JsonMetadata,
  Metadata,
} from '@metaplex-foundation/mpl-token-metadata';
import { base58PublicKey } from '@metaplex-foundation/umi';
import { getAccounts } from './getAccounts';
import {
  handlePublicKey,
  PublicKeyOptions,
  publicKeyToString,
} from './handlePublicKey';
import { makeUmiWrapper } from './makeUmiWrapper';
import { fetchJson } from './tokenMetadata/fetchJson';

const splCache: Record<string, FetchSplTokenOutput> = {};

export type FetchSplTokenOutput = {
  mint: Mint;
  metadata: Metadata | null;
  json: JsonMetadata | null;
};
export const fetchSplToken = makeUmiWrapper(
  async (publicKey: PublicKeyOptions, umi): Promise<FetchSplTokenOutput> => {
    const mintPublicKeyStr = publicKeyToString(publicKey);

    if (splCache[mintPublicKeyStr]) {
      return splCache[mintPublicKeyStr];
    }

    const mintPublicKey = handlePublicKey(publicKey);
    const metadataPda = findMetadataPda(umi, { mint: mintPublicKey });
    const [mintAccount, metadataAccount] = await getAccounts([
      mintPublicKey,
      metadataPda,
    ]);

    if (
      !mintAccount.exists ||
      base58PublicKey(mintAccount.owner) !==
        base58PublicKey(getSplTokenProgramId(umi)) ||
      mintAccount.data.length !== 82
    ) {
      throw new Error('not an spl token');
    }

    const mint = deserializeMint(umi, mintAccount);
    const metadata = metadataAccount.exists
      ? deserializeMetadata(umi, metadataAccount)
      : null;
    const json = metadata ? await fetchJson(metadata.uri) : null;

    const result = {
      mint,
      metadata,
      json,
    };

    splCache[mintPublicKeyStr] = result;

    return result;
  }
);

export const safeFetchSplToken = makeUmiWrapper(
  async (publicKey: PublicKeyOptions, umi) => {
    try {
      return await fetchSplToken(publicKey, umi);
    } catch {
      return null;
    }
  }
);
