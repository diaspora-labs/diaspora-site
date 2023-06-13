import { makeUmiWrapper } from './makeUmiWrapper';

type GetRentInput = {
  bytes: number;
  includesHeaderBytes: boolean;
};
export const getRent = makeUmiWrapper(
  async ({ bytes, includesHeaderBytes = true }: GetRentInput, umi) => {
    const rentCost = await umi.rpc.getRent(bytes, {
      includesHeaderBytes,
    });

    return rentCost;
  }
);
