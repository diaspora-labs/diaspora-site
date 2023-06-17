import { fetchAllTokenByOwnerAndMint as mplFetchAllTokenByOwnerAndMint } from '@metaplex-foundation/mpl-essentials';
import { handlePublicKey, PublicKeyOptions } from './handlePublicKey';
import { makeUmiRpcWrapper } from './makeUmiWrapper';

type FetchAllTokenByOwnerAndMintInput = {
  owner: PublicKeyOptions;
  mint: PublicKeyOptions;
};
export const fetchAllTokenByOwnerAndMint = makeUmiRpcWrapper(
  async (
    { owner, mint }: FetchAllTokenByOwnerAndMintInput,
    umi,
    rpcOptions
  ) => {
    return await mplFetchAllTokenByOwnerAndMint(
      umi,
      handlePublicKey(owner),
      handlePublicKey(mint),
      rpcOptions
    );
  }
);
