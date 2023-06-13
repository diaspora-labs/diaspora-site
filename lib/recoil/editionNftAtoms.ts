import { PublicKey } from "@solana/web3.js"
import { atom } from "recoil"

export const editionNftStoreAtom = atom({
  key: "editionNftStoreAtom",
  default: null,
})

interface IEditionNftMarketAtom {
  address: PublicKey | null
  marketId: string | null
  sale: any | null
}

export const editionNftMarketAtom = atom<IEditionNftMarketAtom>({
  key: "editionNftMarketAtom",
  default: {
    address: null,
    marketId: null,
    sale: null,
  },
})

export const editionNftArtworkAtom = atom<any | undefined>({
  key: "editionNftArtworkAtom",
  default: undefined,
})
