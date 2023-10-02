import { Module } from "@nestjs/common";
import { SignInController } from "@nb/presentation/rest/auth/sign-in/sign-in.controller";
import { SignInService } from "@nb/application/auth/services/sign-in.service";
import { ScryptoModule } from "@nb/infrastructure/scrypt/scrypto.module";
import { JwtModule } from "@nb/infrastructure/jwt/jwt.module";

@Module({
  imports: [
    ScryptoModule,
    JwtModule,
  ],
  controllers: [SignInController],
  providers: [SignInService],
})
export class SignInModule {
}
