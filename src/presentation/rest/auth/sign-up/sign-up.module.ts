import { Module } from "@nestjs/common";
import { SignUpController } from "@nb/presentation/rest/auth/sign-up/sign-up.controller";
import { SignUpService } from "@nb/application/auth/services/sign-up.service";
import { ScryptoModule } from "@nb/infrastructure/scrypt/scrypto.module";
import { JwtModule } from "@nb/infrastructure/jwt/jwt.module";

@Module({
  imports: [
    ScryptoModule,
    JwtModule,
  ],
  controllers: [
    SignUpController,
  ],
  providers: [SignUpService],
})
export class SignUpModule {
}