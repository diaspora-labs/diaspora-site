import {
  fetchFreezeEscrow as mplFetchFreezeEscrow,
  FreezeEscrow,
  safeFetchFreezeEscrow as mplSafeFetchFreezeEscrow,
} from '@metaplex-foundation/mpl-candy-machine';
import { unwrapSome } from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../../handlePublicKey';
import { makeUmiRpcWrapper } from '../../makeUmiWrapper';

const unwrapFreezeEscrow = (freezeEscrow: FreezeEscrow) => ({
  ...freezeEscrow,
  firstMintTime: unwrapSome(freezeEscrow.firstMintTime),
});

export const fetchFreezeEscrow = makeUmiRpcWrapper(
  async (freezeEscrowPda: PublicKeyOptions, umi, rpcOptions) => {
    const freezeEscrowAccount = await mplFetchFreezeEscrow(
      umi,
      handlePublicKey(freezeEscrowPda),
      rpcOptions
    );

    return unwrapFreezeEscrow(freezeEscrowAccount);
  }
);

export const safeFetchFreezeEscrow = makeUmiRpcWrapper(
  async (freezeEscrowPda: PublicKeyOptions, umi, rpcOptions) => {
    const freezeEscrowAccount = await mplSafeFetchFreezeEscrow(
      umi,
      handlePublicKey(freezeEscrowPda),
      rpcOptions
    );

    if (!freezeEscrowAccount) {
      return null;
    }

    return unwrapFreezeEscrow(freezeEscrowAccount);
  }
);
