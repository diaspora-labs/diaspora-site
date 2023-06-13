import {
  createWithdrawInstruction,
  findPayoutTicketAddress,
} from '@metaplex-foundation/mpl-fixed-price-sale';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { PublicKey, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import { IFixedPrice } from '../../../state/sales';
import { MetadataJsonCreator } from '../../createNft';

interface CreateCreatorWithdrawInstructionParams {
  creator: MetadataJsonCreator;
  sale: IFixedPrice;
  wallet: WalletContextState;
  treasuryOwner: PublicKey;
  treasuryOwnerBump: number;
  primaryMetadataCreators: PublicKey;
}

export const createCreatorWithdraw = async ({
  creator,
  sale,
  wallet,
  treasuryOwner,
  treasuryOwnerBump,
  primaryMetadataCreators,
}: CreateCreatorWithdrawInstructionParams) => {
  const { id, artwork } = sale;
  const { treasuryMint, treasuryHolder, sellingResource } = sale.refs;

  const [payoutTicket, payoutTicketBump] = await findPayoutTicketAddress(
    new PublicKey(id),
    new PublicKey(creator.address)
  );

  const destination = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    new PublicKey(treasuryMint),
    new PublicKey(creator.address)
  );

  return createWithdrawInstruction(
    {
      market: new PublicKey(id),
      sellingResource: new PublicKey(sellingResource),
      metadata: new PublicKey(artwork.accountAddress),
      treasuryHolder: new PublicKey(treasuryHolder),
      treasuryMint: new PublicKey(treasuryMint),
      owner: treasuryOwner,
      destination,
      funder: new PublicKey(creator.address),
      payer: wallet.publicKey!,
      payoutTicket,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      primaryMetadataCreators: [primaryMetadataCreators],
      clock: SYSVAR_CLOCK_PUBKEY,
    },
    {
      treasuryOwnerBump,
      payoutTicketBump,
    }
  );
};
