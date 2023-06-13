import { AnyPublicKey } from './AnyPublicKey';

enum ErrorCode {
  ERROR_INVALID_OWNER = 0,
  ERROR_INVALID_ACCOUNT_DATA = 1,
  ERROR_DEPRECATED_ACCOUNT_DATA = 2,
  ERROR_ACCOUNT_NOT_FOUND = 3,
}
class MetaplexError extends Error {
  errorCode: ErrorCode;
  constructor(errorCode: ErrorCode, message: string) {
    super(message);
    this.errorCode = errorCode;
  }
}
export const ERROR_ACCOUNT_NOT_FOUND = (
  pubkey: AnyPublicKey
): MetaplexError => {
  return new MetaplexError(
    ErrorCode.ERROR_ACCOUNT_NOT_FOUND,
    `Unable to find account: ${pubkey}`
  );
};
