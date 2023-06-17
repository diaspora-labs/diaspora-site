import { SaleState } from "@creator-experience/types"
import { Market, MarketState } from "@metaplex-foundation/mpl-fixed-price-sale"
import dayjs from "dayjs"

import { IFixedPrice } from "./types"

export function isSale(sale: IFixedPrice | null): sale is IFixedPrice {
  return sale?.artwork !== undefined
}

export function isSaleStarted(sale: IFixedPrice | Market): boolean {
  const { startDate } = sale
  const now = dayjs().unix()
  const isStarted = startDate ? now > startDate : false
  return isStarted || sale.state === SaleState.Active || false
}

export function isEndedSale(sale: IFixedPrice | Market): boolean {
  const { endDate } = sale
  const now = dayjs().unix()
  const isEnded = endDate ? endDate < now : false

  return (
    isEnded ||
    sale.state === SaleState.Ended ||
    sale.state === SaleState.Suspended ||
    sale.state === SaleState.SoldOut ||
    false
  )
}

export function mapFromMarketState(state: MarketState): SaleState {
  return SaleState[MarketState[state] as keyof typeof SaleState]
}
