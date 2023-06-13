import { bignum } from '@metaplex-foundation/beet';
import { MPL_TOKEN_METADATA_PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import { PublicKey } from '@solana/web3.js';
import { parseBN } from '../../utils/parseBN';

export const METADATA_PREFIX = 'metadata';
export const EDITION_PREFIX = 'edition';
export const COLLECTION_AUTHORITY_PREFIX = 'collection_authority';
export const BURN_PREFIX = 'burn';

const PROGRAM_ID = new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.bytes);

export const findMetadataAddress = (mint: PublicKey) =>
  PublicKey.findProgramAddress(
    [Buffer.from(METADATA_PREFIX), PROGRAM_ID.toBuffer(), mint.toBuffer()],
    PROGRAM_ID
  );

export const findEditionAddress = (mint: PublicKey) =>
  PublicKey.findProgramAddress(
    [
      Buffer.from(METADATA_PREFIX),
      PROGRAM_ID.toBuffer(),
      mint.toBuffer(),
      Buffer.from(EDITION_PREFIX),
    ],
    PROGRAM_ID
  );

export const findEditionMarkerAddress = (mint: PublicKey, edition: bignum) =>
  PublicKey.findProgramAddress(
    [
      Buffer.from(METADATA_PREFIX),
      PROGRAM_ID.toBuffer(),
      mint.toBuffer(),
      Buffer.from(EDITION_PREFIX),
      Buffer.from(Math.floor(parseBN(edition) / 248).toString()),
    ],
    PROGRAM_ID
  );

export const findCollectionAuthorityRecordAddress = async (
  mint: PublicKey,
  newAuthority: PublicKey
) =>
  PublicKey.findProgramAddress(
    [
      Buffer.from(METADATA_PREFIX),
      PROGRAM_ID.toBuffer(),
      mint.toBuffer(),
      Buffer.from(COLLECTION_AUTHORITY_PREFIX),
      newAuthority.toBuffer(),
    ],
    PROGRAM_ID
  );
