import { Nft } from '@creator-experience/types';
import { defaultPublicKey, sol } from '@metaplex-foundation/umi';

const fakePublicKey = defaultPublicKey();

const metadataFiller: Nft['metadata'] = {
  key: 0,
  tokenStandard: null,
  editionNonce: null,
  symbol: '',
  name: '',
  mint: fakePublicKey,
  uri: '',
  primarySaleHappened: false,
  collection: null,
  uses: null,
  collectionDetails: null,
  programmableConfig: null,
  isMutable: true,
  sellerFeeBasisPoints: 0,
  creators: [],
  updateAuthority: fakePublicKey,
};
const editionFiller: Nft['edition'] = {
  publicKey: fakePublicKey,
  key: 0,
  header: {
    executable: false,
    owner: fakePublicKey,
    lamports: sol(0),
  },
  edition: null,
  isOriginal: true,
  supply: null,
  maxSupply: null,
};
const mintFiller: Nft['mint'] = {
  publicKey: fakePublicKey,
  header: {
    executable: false,
    owner: fakePublicKey,
    lamports: sol(0),
  },
  mintAuthority: null,
  supply: BigInt(0),
  decimals: 0,
  isInitialized: true,
  freezeAuthority: null,
};

type MockNftInput = {
  publicKey?: Nft['publicKey'];
  json?: Nft['json'];
  metadata?: Partial<Nft['metadata']>;
  edition?: Partial<Nft['edition']>;
  mint?: Partial<Nft['mint']>;
};
export const mockNft = (nft: MockNftInput): Nft => {
  return {
    publicKey: nft.publicKey || fakePublicKey,
    json: nft.json,
    metadata: {
      ...metadataFiller,
      ...nft.metadata,
    },
    edition: {
      ...editionFiller,
      ...nft.edition,
    },
    mint: {
      ...mintFiller,
      ...nft.mint,
    },
  };
};
