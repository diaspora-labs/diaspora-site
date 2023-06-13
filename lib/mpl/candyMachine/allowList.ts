import { CandyMachine } from '@creator-experience/types';
import {
  findAllowListProofPda,
  route,
} from '@metaplex-foundation/mpl-candy-machine';
import { none, PublicKey, some } from '@metaplex-foundation/umi';
import { makeUmiRpcWrapper, makeUmiSenderWrapper } from '../makeUmiWrapper';

const getProofAccountExists = makeUmiRpcWrapper(
  async (proofPda: PublicKey, umi, rpcOptions) => {
    return await umi.rpc.accountExists(proofPda, rpcOptions);
  }
);

type ProofAllowListInput = {
  merkleProof: Uint8Array[];
  group: string | null;
  candyMachine: CandyMachine;
};
export const routeProofAllowList = makeUmiSenderWrapper(
  async ({ merkleProof, group, candyMachine }: ProofAllowListInput, umi) => {
    if (!candyMachine.candyGuard) throw new Error('No CandyGuard found');

    // Get the current group so that we can get the merkleRoot stored in the CandyGuard
    const currentGroup = candyMachine.candyGuard.groups.find(
      (g) => g.label === group
    );
    const merkleRoot = currentGroup
      ? currentGroup.guards.allowList?.merkleRoot
      : candyMachine.candyGuard.guards.allowList?.merkleRoot;

    if (!merkleRoot) throw new Error('No merkle root found');

    // Check if the PDA proof already exists
    const proofPda = findAllowListProofPda(umi, {
      merkleRoot,
      user: umi.identity.publicKey,
      candyMachine: candyMachine.publicKey,
      candyGuard: candyMachine.candyGuard.publicKey,
    });

    const proofAccountExists = await getProofAccountExists(proofPda, umi);

    // If the PDA proof already exists, then we do not need to create it again
    if (proofAccountExists) {
      return null;
    }

    return route(umi, {
      guard: 'allowList',
      candyMachine: candyMachine.publicKey,
      group: group ? some(group) : none(),
      routeArgs: {
        path: 'proof',
        merkleProof,
        merkleRoot,
      },
    });
  }
);
