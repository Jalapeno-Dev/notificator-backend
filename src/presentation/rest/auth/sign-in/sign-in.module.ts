import { Module } from "@nestjs/common";
import { SignInController } from "@nb/presentation/rest/auth/sign-in/sign-in.controller";
import { ScryptoVerifyPasswordProvider } from "@nb/infrastructure/scrypt/services/scrypto-verify-password.service";
import { UserRepositoryProvider } from "@nb/dao/prisma/repositories/user.repository";
import { SignTokenServiceProvider } from "@nb/infrastructure/jwt/services/sign-token.service";
import { SignInService } from "@nb/application/auth/services/sign-in.service";

@Module({
  imports: [],
  controllers: [SignInController],
  providers: [
    SignInService,
    UserRepositoryProvider,
    SignTokenServiceProvider,
    ScryptoVerifyPasswordProvider,
  ],
})
export class SignInModule {
}
