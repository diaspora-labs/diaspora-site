import { DefaultGuardSetArgs, GuardGroupArgs } from '@creator-experience/types';
import {
  create,
  CreateInput,
  HiddenSettings,
} from '@metaplex-foundation/mpl-candy-machine';
import { none, Nullable, some, Umi } from '@metaplex-foundation/umi';
import { generateSigner } from '../generateSigner';
import {
  makeUmiRequiredWrapper,
  makeUmiSenderWrapper,
  makeUmiTxAsyncWrapper,
} from '../makeUmiWrapper';
import { fetchCandyMachine } from './fetchCandyMachineWithGuard';
import { rewrapGuards } from './unwrapGuards';

const defaultConfigLineSettings = some({
  prefixName: '',
  nameLength: 32,
  prefixUri: '',
  uriLength: 200,
  isSequential: false,
});
export type CreateCandyMachineInput = Omit<
  CreateInput,
  'configLines' | 'hiddenSettings' | 'guards' | 'groups'
> & {
  hiddenSettings?: Nullable<HiddenSettings>;
  guards?: Partial<DefaultGuardSetArgs>;
  groups?: GuardGroupArgs<DefaultGuardSetArgs>[];
};

const getCandyMachineTx = async (
  createInput: CreateCandyMachineInput,
  umi: Umi
) => {
  const input: CreateInput = {
    ...createInput,
    hiddenSettings: createInput.hiddenSettings
      ? some(createInput.hiddenSettings)
      : none(),
    configLineSettings: createInput.hiddenSettings
      ? none()
      : defaultConfigLineSettings,
    guards: createInput.guards ? rewrapGuards(createInput.guards) : undefined,
    groups: createInput.groups?.map((group) => ({
      ...group,
      guards: rewrapGuards(group.guards),
    })),
  };

  const createTx = await create(umi, input);

  return createTx;
};

export const createCandyMachineTx = makeUmiTxAsyncWrapper(getCandyMachineTx);
export const createCandyMachine = makeUmiSenderWrapper(getCandyMachineTx);
export const createCandyMachineAndFetch = makeUmiRequiredWrapper(
  async (createInput: Omit<CreateCandyMachineInput, 'candyMachine'>, umi) => {
    const candyMachineSigner = generateSigner();
    await createCandyMachine(
      {
        ...createInput,
        candyMachine: candyMachineSigner,
      },
      umi
    );

    return await fetchCandyMachine({ publicKey: candyMachineSigner.publicKey });
  }
);
