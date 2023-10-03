import { Module } from "@nestjs/common";
import { ScryptoHashPasswordProvider } from "@nb/infrastructure/scrypt/services/scrypto-hash-password.service";
import { ScryptoVerifyPasswordProvider } from "@nb/infrastructure/scrypt/services/scrypto-verify-password.service";

@Module({
  providers: [
    ScryptoHashPasswordProvider,
    ScryptoVerifyPasswordProvider,
  ],
  exports: [
    ScryptoHashPasswordProvider,
    ScryptoVerifyPasswordProvider,
  ],
})
export class ScryptoModule {
}
