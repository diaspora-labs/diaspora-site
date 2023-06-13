const api = `https://studio.metaplex.com/api/currencyConversion`

/**
 * Get the price conversion between Sol and USD. If -1 is returned, this means this has failed to convert.
 * @param sol
 * @returns
 */
export const convertSolToUsd = async (sol: number): Promise<number> => {
  try {
    const pricePerSol = await (await fetch(api)).json()
    return pricePerSol.solana.usd * sol
  } catch (error) {
    return -1
  }
}
