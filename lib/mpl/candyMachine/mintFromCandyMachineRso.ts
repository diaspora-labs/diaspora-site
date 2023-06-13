import { CandyMachine, DefaultGuardSet, Nft } from '@creator-experience/types';
import {
  DefaultGuardSetMintArgs,
  mint,
  mintV2,
} from '@metaplex-foundation/mpl-candy-machine';
import {
  createMintWithAssociatedToken,
  setComputeUnitLimit,
} from '@metaplex-foundation/mpl-essentials';
import {
  generateSigner,
  KeypairSigner,
  none,
  publicKey,
  Signer,
  some,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { makeUmiRequiredWrapper, makeUmiTxSerializer } from '../makeUmiWrapper';

const TOKEN_AUTH_PROGRAM_ID = publicKey(
  'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
);

type MintCandyMachineInput = {
  candyMachine: CandyMachine;
  collectionNft: Nft;
  owner: Signer;
  thirdPartySigner: Signer;
  currentGroup: DefaultGuardSet;
  groupLabel?: string;
};

// TODO: figure out the LUT table issue
// const txBuilderWithLookUp = txBuilder.setAddressLookupTables([
//   {
//     publicKey: publicKey('DcUPXfE8YLgdN8P45G6ojc4JYbr6g9hHt4yfrAXZKbDy'),
//     addresses: [
//       publicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'),
//       publicKey('Guard1JwRhJkVH6XZhzoYxeBVQe872VH6QggF4BWmS9g'),
//       publicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
//       publicKey('Sysvar1nstructions1111111111111111111111111'),
//       publicKey('SysvarS1otHashes111111111111111111111111111'),
//     ],
//   },
// ]);
const mintFromCandyMachineRsoSerialized = makeUmiTxSerializer(
  (
    {
      candyMachine,
      collectionNft,
      owner,
      thirdPartySigner,
      currentGroup,
      groupLabel,
      mintSigner,
    }: MintCandyMachineInput & {
      mintSigner: KeypairSigner;
    },
    umi
  ) => {
    const mintArgs: Partial<DefaultGuardSetMintArgs> = {
      solPayment: currentGroup.solPayment
        ? some({ destination: currentGroup.solPayment.destination })
        : none(),
      tokenPayment: currentGroup.tokenPayment
        ? some({
            destinationAta: currentGroup.tokenPayment.destinationAta,
            mint: currentGroup.tokenPayment.mint,
          })
        : none(),
      freezeSolPayment: currentGroup.freezeSolPayment
        ? some({
            destination: currentGroup.freezeSolPayment.destination,
            nftRuleSet: candyMachine.ruleSet || undefined,
          })
        : none(),
      freezeTokenPayment: currentGroup.freezeTokenPayment
        ? some({
            destinationAta: currentGroup.freezeTokenPayment.destinationAta,
            mint: currentGroup.freezeTokenPayment.mint,
            nftRuleSet: candyMachine.ruleSet || undefined,
          })
        : none(),
      thirdPartySigner: currentGroup.thirdPartySigner
        ? some({ signer: thirdPartySigner })
        : none(),
      mintLimit: currentGroup.mintLimit ? some(currentGroup.mintLimit) : none(),
      allowList: currentGroup.allowList
        ? some({ merkleRoot: currentGroup.allowList.merkleRoot })
        : none(),
    };

    // In order to support the old candy machine, we need to check the version, this will then switch the version of the mint instruction we are using
    // to the old mint instruction used in the JS SDK, this is to maintain compatibility
    if (candyMachine.version === 0) {
      return transactionBuilder()
        .add(
          createMintWithAssociatedToken(umi, {
            mint: mintSigner,
            owner: owner.publicKey,
            // Amount needs to be passed, is not umi will not create the NFT
            amount: 1,
          })
        )
        .add(
          mint(umi, {
            nftMint: mintSigner.publicKey,
            candyMachine: candyMachine.publicKey,
            collectionMint: collectionNft.publicKey,
            collectionUpdateAuthority: collectionNft.metadata.updateAuthority,
            mintArgs,
            group: groupLabel ? some(groupLabel) : undefined,
          })
        );
    }

    return (
      transactionBuilder()
        // pNFTs require more compute to mint as well as the pontential for mintV2 needing more
        .add(setComputeUnitLimit(umi, { units: 700_000 }))
        .add(
          mintV2(umi, {
            nftMint: mintSigner,
            candyMachine: candyMachine.publicKey,
            collectionMint: collectionNft.publicKey,
            collectionUpdateAuthority: collectionNft.metadata.updateAuthority,
            minter: owner,
            mintArgs,
            group: groupLabel ? some(groupLabel) : undefined,
            tokenStandard: candyMachine.tokenStandard,
            authorizationRulesProgram: candyMachine.ruleSet
              ? TOKEN_AUTH_PROGRAM_ID
              : undefined,
            authorizationRules: candyMachine.ruleSet || undefined,
          })
        )
    );
  }
);

export const mintFromCandyMachineRso = makeUmiRequiredWrapper(
  async (input: MintCandyMachineInput, umi) => {
    const mintSigner = generateSigner(umi);

    const serialized = await mintFromCandyMachineRsoSerialized(
      {
        ...input,
        mintSigner,
      },
      umi
    );

    return {
      serialized,
      mintAddress: mintSigner.publicKey,
    };
  }
);
