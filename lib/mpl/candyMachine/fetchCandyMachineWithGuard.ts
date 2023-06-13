import { CandyMachine } from '@creator-experience/types';
import {
  fetchCandyGuard,
  fetchCandyMachine as mplFetchCandyMachine,
  findCandyGuardPda,
} from '@metaplex-foundation/mpl-candy-machine';
import { PublicKey } from '@metaplex-foundation/umi';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiRpcWrapper, makeUmiWrapper } from '../makeUmiWrapper';
import { enhanceCandyMachine } from './enhanceCandyMachine';

const nativeFetchCandyMachine = makeUmiRpcWrapper(
  async (publicKey: PublicKey, umi, rpcOptions) => {
    const cm = await mplFetchCandyMachine(umi, publicKey, rpcOptions);

    return cm;
  }
);

const nativeFetchCandyGuard = makeUmiRpcWrapper(
  async (publicKey: PublicKey, umi, rpcOptions) => {
    const candyGuardPda = findCandyGuardPda(umi, { base: publicKey });
    const candyGuard = await fetchCandyGuard(umi, candyGuardPda, rpcOptions);

    return candyGuard;
  }
);

type FetchCandyMachineInput = {
  publicKey: PublicKeyOptions;
  loadCandyGuard?: boolean;
};

export const fetchCandyMachine = makeUmiWrapper(
  async (
    { publicKey, loadCandyGuard = true }: FetchCandyMachineInput,
    umi
  ): Promise<CandyMachine> => {
    const pk = handlePublicKey(publicKey);
    if (!loadCandyGuard) {
      const candyMachine = await nativeFetchCandyMachine(pk, umi);

      return enhanceCandyMachine(candyMachine, null);
    }

    const [candyMachine, candyGuard] = await Promise.all([
      nativeFetchCandyMachine(pk, umi),
      nativeFetchCandyGuard(pk, umi),
    ]);

    return enhanceCandyMachine(candyMachine, candyGuard);
  }
);

export const safeFetchCandyMachine = makeUmiWrapper(
  async (input: FetchCandyMachineInput, umi) => {
    try {
      return await fetchCandyMachine(input, umi);
    } catch {
      return null;
    }
  }
);
