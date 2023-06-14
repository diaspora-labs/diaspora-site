import { AccountLayout, Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Connection, Keypair, PublicKey, SystemProgram } from '@solana/web3.js';
import { TransactionsBatch } from '../transactions';

export const createTokenAccount = async ({
  payer,
  mint,
  connection,
  owner,
  amount = 0,
}: {
  payer: PublicKey;
  mint: PublicKey;
  connection: Connection;
  amount?: number;
  owner?: PublicKey;
}) => {
  const tokenAccount = Keypair.generate();

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
    AccountLayout.span
  );

  const createIx = SystemProgram.createAccount({
    fromPubkey: payer,
    newAccountPubkey: tokenAccount.publicKey,
    lamports: accountRentExempt + amount,
    space: AccountLayout.span,
    programId: TOKEN_PROGRAM_ID,
  });

  const initAccountIx = Token.createInitAccountInstruction(
    TOKEN_PROGRAM_ID,
    mint,
    tokenAccount.publicKey,
    owner ?? payer
  );

  const tx = new TransactionsBatch({
    instructions: [createIx, initAccountIx],
    signers: [tokenAccount],
  });

  return {
    tokenAccount,
    tx,
  };
};
