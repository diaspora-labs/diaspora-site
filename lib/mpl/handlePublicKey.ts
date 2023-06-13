import {
  base58PublicKey,
  publicKey,
  PublicKey as UmiPublicKey,
} from '@metaplex-foundation/umi';
import { PublicKey as Web3PublicKey } from '@solana/web3.js';

export type PublicKeyOptions = string | Web3PublicKey | UmiPublicKey;
export const handlePublicKey = (input: PublicKeyOptions): UmiPublicKey => {
  if (typeof input === 'string') {
    return publicKey(input);
  }

  if (input instanceof Web3PublicKey) {
    return publicKey(input.toString());
  }

  return input;
};

export const publicKeyToString = (input: PublicKeyOptions): string =>
  base58PublicKey(handlePublicKey(input));
