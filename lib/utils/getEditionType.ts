import { Art, Nft, PageType } from '@creator-experience/types';

export interface EditionType {
  label: string;
  value: string;
  altLabel: string;
  altValue: string;
  pageType: PageType;
}

export function getEditionType(editionNft?: Nft | null, artwork?: Art) {
  if (!editionNft?.edition) return;
  const edition = editionNft?.edition;
  const supply = artwork
    ? artwork.prints.supply.toString()
    : Number(edition?.supply);
  const maxSupply =
    edition.maxSupply !== null ? Number(edition.maxSupply) : null;
  const altLabel = 'Edition Type';
  let editionType;

  if (maxSupply !== null && maxSupply === 0) {
    editionType = {
      label: 'Edition',
      value: '1 / 1',
      altLabel,
      altValue: 'Edition (One of One)',
      pageType: PageType.AUCTION,
    };
  } else if (maxSupply && maxSupply > 0) {
    editionType = {
      label: 'Limited Edition',
      value: `${supply} / ${maxSupply}`,
      altLabel,
      altValue: 'Limited',
      pageType: PageType.LIMITED,
    };
  } else if (maxSupply === null) {
    editionType = {
      label: 'Open Edition',
      value: `${supply} Minted`,
      altLabel,
      altValue: 'Open (Unlimited)',
      pageType: PageType.OPEN,
    };
  }

  return editionType;
}
