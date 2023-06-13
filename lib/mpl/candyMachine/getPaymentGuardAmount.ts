import { DefaultGuardSet } from '@creator-experience/types';
import { truncateInMiddle } from '@creator-experience/utils';
import { amountToNumber, base58PublicKey } from '@metaplex-foundation/umi';
import { safeFetchSplToken } from '../fetchSplToken';
import { removeTokenAmountDecimals } from './handleTokenDecimals';

export const getSolPaymentGuardAmount = (
  guards: DefaultGuardSet | undefined | null
) => {
  if (!guards) {
    return 0;
  }
  const guard = guards.freezeSolPayment || guards.solPayment;
  if (!guard) {
    return 0;
  }

  return amountToNumber(guard.lamports);
};

export const getTokenPaymentGuardAmount = async (
  guards: DefaultGuardSet | undefined | null
) => {
  const tokenGuard = guards?.freezeTokenPayment || guards?.tokenPayment;
  if (!tokenGuard) {
    return 0;
  }

  return removeTokenAmountDecimals({
    splTokenAddress: tokenGuard.mint,
    amount: tokenGuard.amount,
  });
};

export const getPaymentGuardAmountAndSymbol = async (
  guards: DefaultGuardSet | undefined | null
): Promise<{
  amount: number;
  symbol: string;
} | null> => {
  if (!guards) {
    return null;
  }

  const tokenGuard = guards.freezeTokenPayment || guards.tokenPayment;

  if (tokenGuard) {
    const splToken = await safeFetchSplToken(tokenGuard.mint);
    const symbol = splToken?.metadata?.symbol;
    const normalizedAmount = await getTokenPaymentGuardAmount(guards);

    return {
      amount: normalizedAmount,
      symbol: symbol || truncateInMiddle(base58PublicKey(tokenGuard.mint)),
    };
  }

  const amount = getSolPaymentGuardAmount(guards);

  return {
    amount,
    symbol: 'SOL',
  };
};

export const getPaymentGuardDisplay = async (
  guards: DefaultGuardSet | undefined | null
): Promise<string> => {
  const result = await getPaymentGuardAmountAndSymbol(guards);

  if (!result) {
    return '';
  }

  return `${result.amount.toLocaleString()} ${result.symbol}`;
};
