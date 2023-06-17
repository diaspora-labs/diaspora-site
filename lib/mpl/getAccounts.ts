import { handlePublicKey, PublicKeyOptions } from './handlePublicKey';
import { makeUmiRpcWrapper } from './makeUmiWrapper';

export const getAccounts = makeUmiRpcWrapper(
  async (publicKeys: PublicKeyOptions[], umi, rpcOptions) => {
    return await umi.rpc.getAccounts(
      publicKeys.map(handlePublicKey),
      rpcOptions
    );
  }
);
