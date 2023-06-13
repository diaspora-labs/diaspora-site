import {
  findPrimaryMetadataCreatorsAddress,
  findTreasuryOwnerAddress,
} from '@metaplex-foundation/mpl-fixed-price-sale';
import { WalletContextState } from '@solana/wallet-adapter-react';
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { IFixedPrice } from '../../../state/sales';
import { createPrimaryMetadataCreators } from '../../creators/instructions/createPrimaryMetadataCreators';
import { createAndSignTransaction } from '../../transactions/createAndSignTransaction';
import { createCreatorWithdraw } from './createCreatorWithdraw';

interface WithdrawProps {
  connection: Connection;
  wallet: WalletContextState;
  sale: IFixedPrice;
}

export const createWithdrawTransaction = async ({
  connection,
  wallet,
  sale,
}: WithdrawProps): Promise<Transaction> => {
  const { artwork } = sale;
  const { treasuryMint, sellingResource } = sale.refs;

  const instructions: TransactionInstruction[] = [];
  const [primaryMetadataCreators] = await findPrimaryMetadataCreatorsAddress(
    new PublicKey(sale.artwork.accountAddress)
  );

  const [treasuryOwner, treasuryOwnerBump] = await findTreasuryOwnerAddress(
    new PublicKey(treasuryMint),
    new PublicKey(sellingResource)
  );

  let primaryCreators = sale.primaryCreators;
  const creators = sale.artwork.creators;

  if (artwork.primarySaleHappened) primaryCreators = creators;

  if (!primaryCreators.length) {
    primaryCreators = creators;
    const createPrimaryMetadataCreatorsInstruction =
      await createPrimaryMetadataCreators({
        wallet,
        creators,
        metadata: new PublicKey(artwork.accountAddress),
      });

    instructions.push(createPrimaryMetadataCreatorsInstruction);
  }

  const withdrawInstructions = await Promise.all(
    primaryCreators.map(async (creator) =>
      createCreatorWithdraw({
        creator,
        sale,
        wallet,
        treasuryOwner,
        treasuryOwnerBump,
        primaryMetadataCreators,
      })
    )
  );
  instructions.push(...withdrawInstructions);

  return createAndSignTransaction(instructions, connection, wallet, []);
};
