import { Module } from "@nestjs/common";
import { SignUpController } from "@nb/presentation/rest/auth/sign-up/sign-up.controller";
import { SignUpService } from "@nb/application/auth/services/sign-up.service";
import {
  ScryptoHashPasswordProvider,
} from "@nb/infrastructure/scrypt/services/scrypto-hash-password.service";
import { SignTokenServiceProvider } from "@nb/infrastructure/jwt/services/sign-token.service";
import { UserRepositoryProvider } from "@nb/dao/prisma/repositories/user.repository";

@Module({
  imports: [],
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