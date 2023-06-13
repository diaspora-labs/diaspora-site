import { clusterApiUrl, Connection } from "@solana/web3.js"

export const getEndpoint = () => {
  // return clusterApiUrl("mainnet-beta");
  return "https://solana-api.syndica.io/access-token/uAEZYdZhTbajmrmkDYdMox8sRXEQeBYelMHaSbEKG0DWzbGPHv9NmENZCRI6dAoo/rpc"
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
