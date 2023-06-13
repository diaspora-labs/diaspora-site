import { transferAllSol } from '@metaplex-foundation/mpl-essentials';
import { handlePublicKey, PublicKeyOptions } from './handlePublicKey';
import { makeUmiSenderWrapper } from './makeUmiWrapper';

export const withdrawAll = makeUmiSenderWrapper(
  async (destination: PublicKeyOptions, umi) => {
    return transferAllSol(umi, { destination: handlePublicKey(destination) });
  }
);
