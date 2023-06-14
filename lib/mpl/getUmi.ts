// import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine';
// import { mplHydra } from "@metaplex-foundation/mpl-hydra";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata"
import { createNoopSigner, defaultPublicKey, Signer, signerIdentity, Umi, UmiPlugin } from "@metaplex-foundation/umi"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { ConnectionConfig } from "@solana/web3.js"
import { getEndpoint } from "../utils/getConnection"

type Program = "candyMachine" | "tokenMetadata" | "hydra"

const defaultPrograms: Program[] = ["candyMachine", "tokenMetadata", "hydra"]

const pluginCache: Record<string, UmiPlugin> = {}

const getCachedProgramPlugin = (program: Program, getProgram: () => UmiPlugin): UmiPlugin => {
  const cached = pluginCache[program]

  if (cached) {
    return cached
  }

  const plugin = getProgram()
  pluginCache[program] = plugin

  return plugin
}

const getProgramPlugin = (program: Program): UmiPlugin => {
  switch (program) {
    case "candyMachine":
    // return getCachedProgramPlugin(program, mplCandyMachine);
    case "tokenMetadata":
      return getCachedProgramPlugin(program, mplTokenMetadata)
    case "hydra":
      // return getCachedProgramPlugin(program, mplHydra);
      return null
    default: {
      const n: never = program

      return n
    }
  }
}

const umiCache: Record<string, Umi> = {}

const getCachedUmi = (endpoint: string, connectionConfig?: ConnectionConfig): Umi => {
  const cached = umiCache[endpoint]

  if (cached) {
    return { ...cached }
  }

  // TODO: how do we account for connectionConfig in the cache?
  const umi = createUmi(endpoint, {
    ...connectionConfig,
  })
  umiCache[endpoint] = umi

  return umi
}

type GetUmiOptions = {
  payer?: Signer
  endpoint?: string
  programs?: Program[]
  connectionConfig?: ConnectionConfig
}

export const getUmi = (options?: GetUmiOptions) => {
  const endpoint = options?.endpoint || getEndpoint()
  const umi = getCachedUmi(endpoint, options?.connectionConfig)
  const programs = options?.programs || defaultPrograms

  // programs.map(getProgramPlugin).map((programPlugin) => umi.use(programPlugin))

  if (options?.payer) {
    return umi.use(signerIdentity(options.payer))
  }

  const mockSigner = createNoopSigner(defaultPublicKey())
  umi.use(signerIdentity(mockSigner))

  return umi
}
