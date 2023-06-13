import {
  base64,
  RpcGetAccountOptions,
  Signer,
  TransactionBuilder,
  Umi,
} from '@metaplex-foundation/umi';
import { getUmi } from './getUmi';
import {
  defaultCommitment,
  sendAndConfirm,
  SendAndConfirmOptions,
} from './sendAndConfirm';

type UmiOptions = Umi | Signer;

type UmiWrapperInput<InputType, OutputType> = (
  input: InputType,
  umi: Umi
) => OutputType;

type GetTxBuilderType<
  InputType,
  OutputType = TransactionBuilder
> = UmiWrapperInput<InputType, OutputType>;

const handleUmiOptions = (umiOptions: UmiOptions | undefined): Umi => {
  if (umiOptions && 'payer' in umiOptions) {
    return umiOptions;
  }

  return getUmi({
    payer: umiOptions,
  });
};

// Wrapper that allows for generic output
// umi options is optional
export function makeUmiWrapper<InputType, OutputType>(
  getOutput: UmiWrapperInput<InputType, OutputType>
) {
  return (input: InputType, umiOptions?: UmiOptions) => {
    const umi = handleUmiOptions(umiOptions);

    return getOutput(input, umi);
  };
}

// Same as makeUmiWrapper but requires umi options
export function makeUmiRequiredWrapper<InputType, OutputType>(
  getOutput: UmiWrapperInput<InputType, OutputType>
) {
  return (input: InputType, umiOptions: UmiOptions) => {
    const umi = handleUmiOptions(umiOptions);

    return getOutput(input, umi);
  };
}

// Wrapper that handles RPC calls
// Adds a third argument to the function to pass default RPC options
export function makeUmiRpcWrapper<InputType, OutputType>(
  getPda: (
    input: InputType,
    umi: Umi,
    rpcOptions: RpcGetAccountOptions
  ) => OutputType
) {
  return (input: InputType, umiOptions?: UmiOptions) => {
    const umi = handleUmiOptions(umiOptions);

    return getPda(input, umi, {
      commitment: defaultCommitment,
    });
  };
}

// Wrapper that will handle umi transaction builder but not send
export function makeUmiTxWrapper<InputType>(
  getTxBuilder: GetTxBuilderType<InputType>
) {
  return (input: InputType, umiOptions?: UmiOptions) => {
    const umi = handleUmiOptions(umiOptions);

    return getTxBuilder(input, umi);
  };
}

// Same as above but returns a Promise<TransactionBuilder>
export function makeUmiTxAsyncWrapper<InputType>(
  getTxBuilder: GetTxBuilderType<InputType, Promise<TransactionBuilder>>
) {
  return async (input: InputType, umiOptions?: UmiOptions) => {
    const umi = handleUmiOptions(umiOptions);
    const tx = await getTxBuilder(input, umi);

    return tx;
  };
}

// Wrapper that will handle serialization of a transaction
export function makeUmiTxSerializer<InputType>(
  getTxBuilder: GetTxBuilderType<InputType>
) {
  return async (input: InputType, umiOptions?: UmiOptions) => {
    const umi = handleUmiOptions(umiOptions);
    const tx = getTxBuilder(input, umi);

    const partiallySignedTx = await tx.buildAndSign(umi);

    const serializedTx = base64.deserialize(
      umi.transactions.serialize(partiallySignedTx)
    )[0];

    return serializedTx;
  };
}

type UmiTxBuilderNullType<InputType> = UmiWrapperInput<
  InputType,
  TransactionBuilder | Promise<TransactionBuilder | null> | null
>;

// Wrapper that will take in a transaction builder and send it
// requires umi options
export function makeUmiSenderWrapper<InputType>(
  getTxBuilder: UmiTxBuilderNullType<InputType>
) {
  return async (
    input: InputType,
    umiOptions: UmiOptions,
    senderOptions?: SendAndConfirmOptions
  ) => {
    const umi = handleUmiOptions(umiOptions);
    const tx = await getTxBuilder(input, umi);

    if (!tx) {
      return null;
    }

    return await sendAndConfirm(tx, umi, senderOptions);
  };
}
