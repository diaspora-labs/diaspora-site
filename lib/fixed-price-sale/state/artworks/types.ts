import {
  MetaDataJsonCategory,
  MetadataJsonCreator,
  MetadataJsonFile,
} from '../../web3/createNft';

export enum ArtType {
  Master = 'Master',
  Print = 'Print',
  NFT = 'NFT',
}

export interface IArtCreator extends MetadataJsonCreator {
  verified: boolean;
}

export interface IArt {
  id: string;
  accountAddress: string;
  token: string;
  tokenAmount: number;
  mint: string;
  primarySaleHappened?: boolean;
  sellerFeeBasisPoints: number;
  image: string;
  title: string;
  description?: string;
  creators: IArtCreator[];
  format: MetaDataJsonCategory;
  assets?: MetadataJsonFile[];
  type: ArtType;
  prints?: IPrintNumbers;
  ownerAddress?: string;
}

export interface IPrintNumbers {
  // current print number (ArtType is Print)
  edition?: number;
  // current amount of prints
  supply?: number;
  // maximum amount of prints (0 = unlimited)
  maxSupply?: number;
}
