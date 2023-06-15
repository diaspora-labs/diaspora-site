export type Nft = any
export type Art = any

export enum PageType {
  AUCTION = "AUCTION",
  LIMITED = "LIMITED",
  OPEN = "OPEN",
  GENERATIVE = "GENERATIVE",
}

export enum SaleState {
  Uninitialized = 0,
  Created = 1,
  Suspended = 2,
  Active = 3,
  SoldOut = 4,
  Ended = 5,
}

export enum OptimizedImageSize {
  PREVIEW = "PREVIEW",
  THUMBNAIL = "THUMBNAIL",
  LARGE = "LARGE",
}
