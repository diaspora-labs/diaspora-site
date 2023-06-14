import { LAMPORTS_PER_SOL } from "@solana/web3.js"

export function lamportsToSol(lamports: number) {
  return lamports / LAMPORTS_PER_SOL
}

export function solToLamports(sol: number) {
  return sol * LAMPORTS_PER_SOL
}
