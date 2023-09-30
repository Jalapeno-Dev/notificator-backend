export const HASH_PASSWORD_SERVICE = Symbol.for("HASH_PASSWORD_SERVICE");

export interface IHashPasswordService {
  hash(password: string): Promise<string>;
}