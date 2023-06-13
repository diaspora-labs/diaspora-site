import {
  fetchMasterEdition,
  findMasterEditionPda,
  MasterEdition,
} from '@metaplex-foundation/mpl-token-metadata';
import { publicKey, Umi, unwrapSome } from '@metaplex-foundation/umi';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { AnyPublicKey } from '../interfaces/AnyPublicKey';

export const loadArtworkEdition = async ({
  umi,
  mint,
}: {
  umi: Umi;
  mint: AnyPublicKey;
}) => {
  const editionKey = findMasterEditionPda(umi, {
    mint: publicKey(mint.toString()),
  });
  const me = await fetchMasterEdition(umi, editionKey, {
    commitment: 'confirmed',
  });

  return {
    prints: getSupply(me),
    editionKey: new PublicKey(editionKey.bytes),
  };
};

const getSupply = (edition: MasterEdition) => {
  const supply = new BN(Number(edition.supply));
  const unwrappedMax = unwrapSome(edition.maxSupply);
  const maxSupply =
    unwrappedMax === null ? 'unlimited' : new BN(Number(unwrappedMax));

  return {
    supply,
    maxSupply,
  };
};
