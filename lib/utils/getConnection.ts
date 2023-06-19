import { clusterApiUrl, Connection } from "@solana/web3.js"

export const getEndpoint = () => {
  // return clusterApiUrl("mainnet-beta");
  return "https://quiet-winter-card.solana-mainnet.discover.quiknode.pro/f2ffa7a70f87b71860490cdebd2f21d804add611"
}

const connectionCache: Record<string, Connection> = {}

const getConnectionCache = (endpoint: string): Connection => {
  if (connectionCache[endpoint]) {
    return connectionCache[endpoint]
  }

  const connection = new Connection(endpoint)
  connectionCache[endpoint] = connection

  return connection
}

export const getConnection = () => {
  const endpoint = getEndpoint()

  return getConnectionCache(endpoint)
}
