import {
  DefaultGuardSet,
  DefaultGuardSetArgs,
} from '@creator-experience/types';
import {
  DefaultGuardSet as MplDefaultGuardSet,
  DefaultGuardSetArgs as MplDefaultGuardSetArgs,
} from '@metaplex-foundation/mpl-candy-machine';
import { unwrapSome } from '@metaplex-foundation/umi';
import { rewrapSome } from '../rewrapSome';

export const unwrapGuards = (
  guardSet: MplDefaultGuardSet
): DefaultGuardSet => ({
  botTax: unwrapSome(guardSet.botTax),
  solPayment: unwrapSome(guardSet.solPayment),
  tokenPayment: unwrapSome(guardSet.tokenPayment),
  startDate: unwrapSome(guardSet.startDate),
  thirdPartySigner: unwrapSome(guardSet.thirdPartySigner),
  tokenGate: unwrapSome(guardSet.tokenGate),
  gatekeeper: unwrapSome(guardSet.gatekeeper),
  endDate: unwrapSome(guardSet.endDate),
  allowList: unwrapSome(guardSet.allowList),
  mintLimit: unwrapSome(guardSet.mintLimit),
  nftPayment: unwrapSome(guardSet.nftPayment),
  redeemedAmount: unwrapSome(guardSet.redeemedAmount),
  addressGate: unwrapSome(guardSet.addressGate),
  nftGate: unwrapSome(guardSet.nftGate),
  nftBurn: unwrapSome(guardSet.nftBurn),
  tokenBurn: unwrapSome(guardSet.tokenBurn),
  freezeSolPayment: unwrapSome(guardSet.freezeSolPayment),
  freezeTokenPayment: unwrapSome(guardSet.freezeTokenPayment),
  programGate: unwrapSome(guardSet.programGate),
});

export const rewrapGuards = (
  unwrapped: Partial<DefaultGuardSet | DefaultGuardSetArgs>
): Partial<MplDefaultGuardSet | MplDefaultGuardSetArgs> => ({
  botTax: rewrapSome(unwrapped.botTax),
  solPayment: rewrapSome(unwrapped.solPayment),
  tokenPayment: rewrapSome(unwrapped.tokenPayment),
  startDate: rewrapSome(unwrapped.startDate),
  thirdPartySigner: rewrapSome(unwrapped.thirdPartySigner),
  tokenGate: rewrapSome(unwrapped.tokenGate),
  gatekeeper: rewrapSome(unwrapped.gatekeeper),
  endDate: rewrapSome(unwrapped.endDate),
  allowList: rewrapSome(unwrapped.allowList),
  mintLimit: rewrapSome(unwrapped.mintLimit),
  nftPayment: rewrapSome(unwrapped.nftPayment),
  redeemedAmount: rewrapSome(unwrapped.redeemedAmount),
  addressGate: rewrapSome(unwrapped.addressGate),
  nftGate: rewrapSome(unwrapped.nftGate),
  nftBurn: rewrapSome(unwrapped.nftBurn),
  tokenBurn: rewrapSome(unwrapped.tokenBurn),
  freezeSolPayment: rewrapSome(unwrapped.freezeSolPayment),
  freezeTokenPayment: rewrapSome(unwrapped.freezeTokenPayment),
  programGate: rewrapSome(unwrapped.programGate),
});
