const getStringEnv = (
  maybeEnv: string | undefined,
  envName: string
): string => {
  if (!maybeEnv) {
    throw new Error(`env variable ${envName} not set`);
  }

  return maybeEnv;
};

const makeGetStringEnv =
  (maybeEnv: string | undefined, envName: string) => () =>
    getStringEnv(maybeEnv, envName);

const makeGetFloatEnv =
  (maybeEnv: string | undefined, envName: string) => () => {
    if (!maybeEnv) {
      throw new Error(`env variable ${envName} not set`);
    }
    const parsed = parseFloat(maybeEnv);

    if (isNaN(parsed)) {
      throw new Error(`env variable ${envName} is NaN`);
    }

    return parsed;
  };

const makeGetStringListEnv =
  (maybeEnv: string | undefined, envName: string) => () => {
    const envVar = getStringEnv(maybeEnv, envName);
    const parsed = envVar.split(',');

    if (parsed.length === 0) {
      throw new Error(`env variable ${envName} is not a list`);
    }

    return parsed;
  };

export const getMetaplexFeeWallet = makeGetStringEnv(
  process.env['NEXT_PUBLIC_METAPLEX_FEE_WALLET'],
  'NEXT_PUBLIC_METAPLEX_FEE_WALLET'
);
export const getCandyMachinePrimaryFeeWallet = makeGetStringEnv(
  process.env['NEXT_PUBLIC_CANDY_MACHINE_PRIMARY_FEE_WALLET'],
  'NEXT_PUBLIC_CANDY_MACHINE_PRIMARY_FEE_WALLET'
);
export const getAirdropFeeWallet = makeGetStringEnv(
  process.env['NEXT_PUBLIC_AIRDROP_FEE_WALLET'],
  'NEXT_PUBLIC_AIRDROP_FEE_WALLET'
);
export const getEditionPrimaryFeeWallet = makeGetStringEnv(
  process.env['NEXT_PUBLIC_EDITION_PRIMARY_FEE_WALLET'],
  'NEXT_PUBLIC_EDITION_PRIMARY_FEE_WALLET'
);
export const getEditionMintFeeWallet = makeGetStringEnv(
  process.env['NEXT_PUBLIC_EDITION_MINT_FEE_WALLET'],
  'NEXT_PUBLIC_EDITION_MINT_FEE_WALLET'
);
export const getGlobalEditionCreationFeeSol = makeGetFloatEnv(
  process.env['NEXT_PUBLIC_EDITION_CREATION_FEE_SOL'],
  'NEXT_PUBLIC_EDITION_CREATION_FEE_SOL'
);
export const getGlobalCmMintFeePercentage = makeGetFloatEnv(
  process.env['NEXT_PUBLIC_CM_MINT_FEE_PERCENTAGE'],
  'NEXT_PUBLIC_CM_MINT_FEE_PERCENTAGE'
);
export const getGlobalEditionMintFeePercentage = makeGetFloatEnv(
  process.env['NEXT_PUBLIC_EDITION_MINT_FEE_PERCENTAGE'],
  'NEXT_PUBLIC_EDITION_MINT_FEE_PERCENTAGE'
);
export const getGlobalEditionMintFeeSol = makeGetFloatEnv(
  process.env['NEXT_PUBLIC_EDITION_MINT_FEE_SOL'],
  'NEXT_PUBLIC_EDITION_MINT_FEE_SOL'
);
export const getAirdropFlatFeeSol = makeGetFloatEnv(
  process.env['NEXT_PUBLIC_AIRDROP_FLAT_FEE_SOL'],
  'NEXT_PUBLIC_AIRDROP_FLAT_FEE_SOL'
);
export const getAirdropProgressiveFeeSol = makeGetFloatEnv(
  process.env['NEXT_PUBLIC_AIRDROP_PROGRESSIVE_FEE_SOL'],
  'NEXT_PUBLIC_AIRDROP_PROGRESSIVE_FEE_SOL'
);
export const getHydraCrankWallet = makeGetStringEnv(
  process.env['NEXT_PUBLIC_HYDRA_CRANK_WALLET'],
  'NEXT_PUBLIC_HYDRA_CRANK_WALLET'
);

export const getMetaplexRuleset = makeGetStringEnv(
  process.env['NEXT_PUBLIC_METAPLEX_RULESET'],
  'NEXT_PUBLIC_METAPLEX_RULESET'
);
export const getCompatibilityRuleset = makeGetStringEnv(
  process.env['NEXT_PUBLIC_METAPLEX_PASS_RULESET'],
  'NEXT_PUBLIC_METAPLEX_PASS_RULESET'
);
export const getRoyaltiesUiUrl = makeGetStringEnv(
  process.env['NEXT_PUBLIC_ROYALTIES_URL'],
  'NEXT_PUBLIC_ROYALTIES_URL'
);
export const getSplFeeSol = makeGetFloatEnv(
  process.env['NEXT_PUBLIC_SPL_FEE_SOL'],
  'NEXT_PUBLIC_SPL_FEE_SOL'
);
export const getSplFeeWallet = makeGetStringEnv(
  process.env['NEXT_PUBLIC_SPL_FEE_WALLET'],
  'NEXT_PUBLIC_SPL_FEE_WALLET'
);
export const getSplAllowlist = makeGetStringListEnv(
  process.env['NEXT_PUBLIC_SPL_ALLOWLIST'],
  'NEXT_PUBLIC_SPL_ALLOWLIST'
);
export const getFpsLookupTableAddress = makeGetStringEnv(
  process.env['NEXT_PUBLIC_FPS_LOOKUP_TABLE_ADDRESS'],
  'NEXT_PUBLIC_FPS_LOOKUP_TABLE_ADDRESS'
);
export const getCloudflareImagePipelineUrl = makeGetStringEnv(
  process.env['NEXT_PUBLIC_CLOUDFLARE_IMAGE_PIPELINE_URL'],
  'NEXT_PUBLIC_CLOUDFLARE_IMAGE_PIPELINE_URL'
);
export const getCloudflareIpfsGatewayUrl = makeGetStringEnv(
  process.env['NEXT_PUBLIC_CLOUDFLARE_IPFS_GATEWAY_URL'],
  'NEXT_PUBLIC_CLOUDFLARE_IPFS_GATEWAY_URL'
);
