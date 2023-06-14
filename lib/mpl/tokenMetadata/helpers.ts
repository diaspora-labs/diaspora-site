import { Nft } from '@creator-experience/types';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';

const makeIsNftType = (tokenStandard: TokenStandard) => (nft: Nft) => {
  return (
    'tokenStandard' in nft.metadata &&
    nft?.metadata?.tokenStandard === tokenStandard
  );
};

export const isSft = makeIsNftType(TokenStandard.FungibleAsset);
export const isPnft = makeIsNftType(TokenStandard.ProgrammableNonFungible);

export const isNftWithToken = (nft: Nft) => !!nft.token;
