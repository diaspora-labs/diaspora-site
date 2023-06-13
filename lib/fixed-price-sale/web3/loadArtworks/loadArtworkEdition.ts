import { getUmi } from '@creator-experience/mpl';
import {
  Edition,
  fetchMasterEdition,
  Key,
  MasterEdition,
} from '@metaplex-foundation/mpl-token-metadata';
import { publicKey, unwrapSome } from '@metaplex-foundation/umi';
import { PublicKey } from '@solana/web3.js';
import { ArtType, IArt } from '../../state/artworks';
import { parseBN } from '../../utils/parseBN';
import { findEditionAddress } from './utils';

export type ArtEditionProps = Pick<IArt, 'type' | 'prints'>;
export type AnyEdition = Edition | MasterEdition;

export const loadArtworkEdition = async ({
  mint,
}: {
  mint: PublicKey;
}): Promise<ArtEditionProps> => {
  try {
    const [editionPda] = await findEditionAddress(mint);
    const edition = await fetchMasterEdition(
      getUmi(),
      publicKey(editionPda.toBase58())
    );
    const master = isEdition(edition)
      ? await fetchMasterEdition(getUmi(), edition.parent)
      : undefined;

    return getEditionProps(edition, master);
  } catch (e) {
    // This is still an NFT but not on Metaplex standard, or a semi-fungible token
    return getEditionProps();
  }
};

export const getEditionProps = (edition?: AnyEdition, master?: AnyEdition) => ({
  type: getArtType(edition),
  prints: getPrintNumbers(edition, master),
});

const getArtType = (edition?: AnyEdition) => {
  switch (edition?.key) {
    case Key.EditionV1:
      return ArtType.Print;
    case Key.MasterEditionV1:
    case Key.MasterEditionV2:
      return ArtType.Master;
    default:
      return ArtType.NFT;
  }
};

const getPrintNumbers = (edition?: AnyEdition, master?: AnyEdition) => {
  if (!edition) return undefined;
  if (isEdition(edition))
    return { edition: parseBN(edition.edition), ...getSupply(master) };
  return getSupply(edition);
};

const getSupply = (edition?: AnyEdition) => {
  if (!edition || isEdition(edition)) return undefined;
  return {
    supply: parseBN(edition.supply),
    maxSupply: parseBN(unwrapSome(edition.maxSupply)),
  };
};

export const isEdition = (value: AnyEdition): value is Edition => {
  return value.key === Key.EditionV1;
};
