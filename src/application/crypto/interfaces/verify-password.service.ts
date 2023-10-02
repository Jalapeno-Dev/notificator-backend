export const VERIFY_PASSWORD_SERVICE = Symbol.for("VERIFY_PASSWORD_SERVICE");

export interface IVerifyPasswordService {
  verify(params: { password: string, passwordHash: string }): Promise<boolean>;
}