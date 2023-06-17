import {
  base58,
  Commitment,
  TransactionBuilder,
  Umi,
} from '@metaplex-foundation/umi';

export const defaultCommitment: Commitment = 'confirmed';

export type SendAndConfirmOptions = {
  skipPreflight?: boolean;
  commitment?: Commitment;
};
export const sendAndConfirm = async (
  tx: TransactionBuilder,
  umi: Umi,
  options?: SendAndConfirmOptions
) => {
  const commitment = options?.commitment || defaultCommitment;
  const { signature, result } = await tx.sendAndConfirm(umi, {
    confirm: {
      commitment,
    },
    send: {
      preflightCommitment: commitment,
      skipPreflight: options?.skipPreflight,
    },
  });

  const [signatureString] = base58.deserialize(signature);

  if (result.value.err) {
    const errorMessage =
      typeof result.value.err === 'string'
        ? result.value.err
        : `Transaction failed: ${signatureString}`;

    throw new Error(errorMessage);
  }

  return {
    signature: signatureString,
    result,
  };
};
