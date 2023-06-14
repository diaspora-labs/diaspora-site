import { base58PublicKey, PublicKey } from '@metaplex-foundation/umi';

export const safeBase58PublicKey = (
  publicKey: PublicKey | undefined | null
) => {
  if (!publicKey) {
    return null;
  }

  return base58PublicKey(publicKey);
};

export const safeBase58PublicKeyCompare = (
  key1: PublicKey | undefined,
  key2: PublicKey | undefined
) => {
  if (!key1 || !key2) {
    return false;
  }

  return base58PublicKey(key1) === base58PublicKey(key2);
};
