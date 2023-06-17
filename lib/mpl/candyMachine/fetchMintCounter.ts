import { CandyMachine } from '@creator-experience/types';
import {
  fetchMintCounter as mplFetchMintCounter,
  findMintCounterPda,
} from '@metaplex-foundation/mpl-candy-machine';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiRpcWrapper, makeUmiWrapper } from '../makeUmiWrapper';

type FetchMintLimitCounterInput = {
  candyMachine: CandyMachine;
  user: PublicKeyOptions;
  id: number;
};

export const fetchMintCounter = makeUmiRpcWrapper(
  async (
    { candyMachine, user, id }: FetchMintLimitCounterInput,
    umi,
    rpcOptions
  ) => {
    if (!candyMachine.candyGuard) {
      throw new Error('No candy guard found on Candy Machine');
    }

    const mintCounterPda = findMintCounterPda(umi, {
      candyMachine: candyMachine.publicKey,
      candyGuard: candyMachine.candyGuard.publicKey,
      user: handlePublicKey(user),
      id,
    });

    return await mplFetchMintCounter(umi, mintCounterPda, rpcOptions);
  }
);

export const safeFetchMintCounter = makeUmiWrapper(
  async (input: FetchMintLimitCounterInput, umi) => {
    try {
      return await fetchMintCounter(input, umi);
    } catch {
      return null;
    }
  }
);
