import { createBuyInstruction } from '@metaplex-foundation/mpl-fixed-price-sale';
import { MPL_TOKEN_METADATA_PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import {
  AccountMeta,
  Connection,
  PublicKey,
  SYSVAR_CLOCK_PUBKEY,
  Transaction,
} from '@solana/web3.js';
import { findAssociatedTokenAddress } from '../../utils/findAssociatedTokenAddress';

interface CreateBuyMembershipTokenParams {
  connection: Connection;
  buyer: PublicKey;
  userTokenAccount: PublicKey;
  resourceMintMetadata: PublicKey;
  resourceMintEditionMarker: PublicKey;
  resourceMintMasterEdition: PublicKey;
  sellingResource: PublicKey;
  tradeHistory: PublicKey;
  tradeHistoryBump: number;
  market: PublicKey;
  marketTreasuryHolder: PublicKey;
  vaultOwner: PublicKey;
  vault: PublicKey;
  vaultOwnerBump: number;
  newMint: PublicKey;
  newMintEdition: PublicKey;
  newMintMetadata: PublicKey;
  newTokenAccount: PublicKey;
  gatekeeperCollection?: PublicKey;
}

export const createBuyTransaction = async ({
  connection,
  buyer,
  userTokenAccount,
  resourceMintMetadata,
  resourceMintEditionMarker,
  resourceMintMasterEdition,
  sellingResource,
  tradeHistory,
  tradeHistoryBump,
  market,
  marketTreasuryHolder,
  vault,
  vaultOwner,
  vaultOwnerBump,
  newMint,
  newMintEdition,
  newMintMetadata,
  newTokenAccount,
  gatekeeperCollection,
}: CreateBuyMembershipTokenParams) => {
  const additionalKeys: AccountMeta[] = [];
  if (gatekeeperCollection) {
    const tokenAddress = await findAssociatedTokenAddress(
      buyer,
      gatekeeperCollection
    );
    additionalKeys.push(
      ...[
        {
          // token account
          pubkey: new PublicKey(tokenAddress),
          isSigner: false,
          isWritable: true,
        },
        {
          // token mint
          pubkey: gatekeeperCollection,
          isSigner: false,
          isWritable: true,
        },
      ]
    );
  }

  const instruction = await createBuyInstruction(
    {
      // buyer wallet
      userWallet: buyer,
      // user token account
      userTokenAccount,
      // resource mint edition marker PDA
      editionMarker: resourceMintEditionMarker,
      // resource mint master edition
      masterEdition: resourceMintMasterEdition,
      // resource mint metadata PDA
      masterEditionMetadata: resourceMintMetadata,
      // token account for selling resource
      vault,
      // account which holds selling entities
      sellingResource,
      // owner of selling resource token account PDA
      owner: vaultOwner,
      // market account
      market,
      // PDA which creates on market for each buyer
      tradeHistory,
      // market treasury holder (buyer will send tokens to this account)
      treasuryHolder: marketTreasuryHolder,
      // newly generated mint address
      newMint,
      // newly generated mint metadata PDA
      newMetadata: newMintMetadata,
      // newly generated mint edition PDA
      newEdition: newMintEdition,
      // metaplex token metadata program address
      tokenMetadataProgram: new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.bytes),
      newTokenAccount,
      clock: SYSVAR_CLOCK_PUBKEY,
      additionalKeys,
    },
    { tradeHistoryBump, vaultOwnerBump }
  );

  const tx = new Transaction();
  tx.add(instruction);
  tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
  tx.feePayer = buyer;

  return { tx };
};
