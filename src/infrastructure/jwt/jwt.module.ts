import { Module } from "@nestjs/common";
import { SignTokenServiceProvider } from "@nb/infrastructure/jwt/services/sign-token.service";
import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { JwtConfigFactory } from "@nb/infrastructure/jwt/factories/jwt-config.factory";

@Module({
  imports: [
    NestJwtModule.registerAsync({ useClass: JwtConfigFactory, global: true }),
  ],
  providers: [SignTokenServiceProvider],
  exports: [SignTokenServiceProvider],
})
export class JwtModule {
}