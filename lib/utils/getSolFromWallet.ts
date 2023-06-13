import { Connection, PublicKey } from '@solana/web3.js';
import { lamportsToSol } from './lamportsToSol';

export const getSolFromWallet = async (
  connection: Connection,
  publicKey: PublicKey
): Promise<number> => {
  try {
    const balance = await connection.getBalance(publicKey);
    return lamportsToSol(balance);
  } catch (error) {
    return -1;
  }
};
