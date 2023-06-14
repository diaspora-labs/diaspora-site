import { findFanoutNativeAccountPda } from '@metaplex-foundation/mpl-hydra';
import { base58PublicKey } from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiWrapper } from '../makeUmiWrapper';

export const getHoldingFromFanout = makeUmiWrapper(
  (fanoutWalletPublicKey: PublicKeyOptions, umi) => {
    const nativePda = findFanoutNativeAccountPda(umi, {
      fanout: handlePublicKey(fanoutWalletPublicKey),
    });

    return base58PublicKey(nativePda);
  }
);
