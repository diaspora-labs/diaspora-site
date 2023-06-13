import { Signer } from '@metaplex-foundation/umi';
import { createDerivedSigner as umiCreateDerivedSigner } from '@metaplex-foundation/umi-signer-derived';
import { makeUmiWrapper } from './makeUmiWrapper';

type CreateDerivedSignerInput = {
  originalSigner: Signer;
  message: string;
};
export const createDerivedSigner = makeUmiWrapper(
  async ({ originalSigner, message }: CreateDerivedSignerInput, umi) => {
    const derivedSigner = await umiCreateDerivedSigner(
      umi,
      originalSigner,
      message
    );

    return derivedSigner;
  }
);
