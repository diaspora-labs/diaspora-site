import {
  fetchTokenRecord as mplFetchTokenRecord,
  findTokenRecordPda as mplFindTokenRecordPda,
} from '@metaplex-foundation/mpl-token-metadata';
import { handlePublicKey, PublicKeyOptions } from '../handlePublicKey';
import { makeUmiRpcWrapper } from '../makeUmiWrapper';

type FindTokenRecordPdaInput = {
  mint: PublicKeyOptions;
  token: PublicKeyOptions;
};
export const fetchTokenRecord = makeUmiRpcWrapper(
  async ({ mint, token }: FindTokenRecordPdaInput, umi, rpcOptions) => {
    const tokenRecord = mplFindTokenRecordPda(umi, {
      mint: handlePublicKey(mint),
      token: handlePublicKey(token),
    });

    const tokenRecordAccount = await mplFetchTokenRecord(
      umi,
      tokenRecord,
      rpcOptions
    );

    return tokenRecordAccount;
  }
);
