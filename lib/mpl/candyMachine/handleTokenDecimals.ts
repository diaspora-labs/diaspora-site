import { safeFetchSplToken } from '../fetchSplToken';
import { PublicKeyOptions } from '../handlePublicKey';

const getDecimalMultiplierByToken = async (
  splTokenAddress: PublicKeyOptions
) => {
  const splToken = await safeFetchSplToken(splTokenAddress);
  const decimalMultiplier = 10 ** (splToken?.mint?.decimals || 0);

  return decimalMultiplier;
};

type ChangeTokenAmountDecimalInput = {
  amount: bigint | number;
  splTokenAddress: PublicKeyOptions;
};
const makeChangeTokenAmountByDecimals =
  (action: 'add' | 'remove') =>
  async ({
    amount,
    splTokenAddress,
  }: ChangeTokenAmountDecimalInput): Promise<number> => {
    const decimalMultipler = await getDecimalMultiplierByToken(splTokenAddress);
    const numAmount = Number(amount);

    return action === 'add'
      ? numAmount * decimalMultipler
      : numAmount / decimalMultipler;
  };

export const addTokenAmountDecimals = makeChangeTokenAmountByDecimals('add');
export const removeTokenAmountDecimals =
  makeChangeTokenAmountByDecimals('remove');
