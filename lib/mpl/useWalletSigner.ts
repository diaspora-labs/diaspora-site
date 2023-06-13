import { Signer } from '@metaplex-foundation/umi';
import { createSignerFromWalletAdapter } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { useWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';

const getSigner = (wallet: WalletContextState) => {
  if (wallet?.publicKey) {
    const newSigner = createSignerFromWalletAdapter(wallet);
    return newSigner;
  }

  return null;
};

export const useWalletSigner = () => {
  const wallet = useWallet();
  const [signer, setSigner] = useState<Signer | null>(getSigner(wallet));

  useEffect(() => {
    setSigner(getSigner(wallet));
  }, [wallet]);

  return signer;
};
