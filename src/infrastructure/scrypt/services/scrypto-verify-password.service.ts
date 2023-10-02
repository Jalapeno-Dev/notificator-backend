import {
  IVerifyPasswordService,
  VERIFY_PASSWORD_SERVICE,
} from "@nb/application/crypto/interfaces/verify-password.service";
import { scrypt } from "crypto";

export class ScryptoVerifyPasswordService implements IVerifyPasswordService {
  verify(params: { password: string; passwordHash: string }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const [salt, key] = params.passwordHash.split(":");
      const keyBuffer = Buffer.from(key, "hex");
      scrypt(params.password, salt, 32, (err, derivedKey) => {
        if (err) reject(err);
        resolve(keyBuffer.compare(derivedKey) === 0);
      });
    });
  }
}

export const ScryptoVerifyPasswordProvider = {
  provide: VERIFY_PASSWORD_SERVICE,
  useClass: ScryptoVerifyPasswordService,
};