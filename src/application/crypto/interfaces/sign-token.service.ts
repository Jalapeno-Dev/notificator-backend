
export const SIGN_TOKEN_SERVICE = Symbol.for("SIGN_TOKEN_SERVICE");
export interface ISignTokenService {
  sign(payload: object | string): Promise<string>;
}