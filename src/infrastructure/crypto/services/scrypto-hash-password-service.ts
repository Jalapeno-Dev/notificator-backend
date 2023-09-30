import { randomBytes, scrypt } from "crypto";
import { HASH_PASSWORD_SERVICE, IHashPasswordService } from "@nb/application/crypto/interfaces/hash-password.service";

class ScryptoHashPasswordService implements IHashPasswordService {
  async hash(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const salt = randomBytes(8).toString("hex");
      scrypt(password, salt, 32, (err, derivedKey) => {
        if (err) reject(err);
        resolve(salt + ":" + derivedKey.toString("hex"));
      });
    });
  }
}

export const ScryptoHashPasswordProvider = {
  provide: HASH_PASSWORD_SERVICE,
  useClass: ScryptoHashPasswordService,
};