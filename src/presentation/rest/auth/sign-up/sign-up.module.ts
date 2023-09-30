import { Module } from "@nestjs/common";
import { SignUpController } from "@nb/presentation/rest/auth/sign-up/sign-up.controller";
import { SignUpService } from "@nb/application/auth/services/sign-up.service";
import {
  ScryptoHashPasswordProvider,
} from "@nb/infrastructure/crypto/services/scrypto-hash-password-service";
import { SignTokenServiceProvider } from "@nb/infrastructure/crypto/services/sign-token.service";
import { UserRepositoryProvider } from "@nb/dao/repositories/user.repository";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: "secret",
    }),
  ],
  controllers: [
    SignUpController,
  ],
  providers: [
    SignUpService,
    UserRepositoryProvider,
    ScryptoHashPasswordProvider,
    SignTokenServiceProvider,
  ],
})
export class SignUpModule {
}