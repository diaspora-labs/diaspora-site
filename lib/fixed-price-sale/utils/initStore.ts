import { createCreateStoreInstruction } from '@metaplex-foundation/mpl-fixed-price-sale';
import { Keypair, Transaction } from '@solana/web3.js';
import { InitStoreProps, IStore } from '../interfaces/Store';
import { waitConfirmation } from '../web3/transactions/waitConfirmation';

/**
 * Adapted from @metaplex-foundation/membership-token-admin/sdk/createStore
 */

// Helpers
const createTransaction = async ({
  name,
  connection,
  wallet,
}: InitStoreProps) => {
  const store = Keypair.generate();

  if (!wallet.publicKey) {
    throw new Error();
  }

  const instruction = createCreateStoreInstruction(
    {
      store: store.publicKey,
      admin: wallet.publicKey,
    },
    {
      name,
      description: ' '.repeat(60),
    }
  );

  const storeTx = new Transaction();
  storeTx.add(instruction);
  storeTx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
  storeTx.feePayer = wallet.publicKey;
  storeTx.partialSign(store);

  return { store, storeTx };
};

export const initStore = async ({
  name,
  connection,
  wallet,
}: InitStoreProps): Promise<Pick<IStore, 'storeId'>> => {
  const { store, storeTx } = await createTransaction({
    name,
    connection,
    wallet,
  });

  if (!wallet.signTransaction) {
    throw new Error();
  }

  const signedTx = await wallet.signTransaction(storeTx);
  const rawTx = signedTx.serialize();
  const txId = await connection.sendRawTransaction(rawTx, {
    skipPreflight: true,
  });

  await waitConfirmation(connection, rawTx, txId);
  return { storeId: store.publicKey.toString() };
};
