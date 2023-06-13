import { generateSigner as umiGenerateSigner } from '@metaplex-foundation/umi';
import { getUmi } from './getUmi';

export const generateSigner = () => {
  const umi = getUmi();

  return umiGenerateSigner(umi);
};
