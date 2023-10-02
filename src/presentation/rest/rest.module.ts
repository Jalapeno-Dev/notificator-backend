import { Module } from "@nestjs/common";
import { SignUpModule } from "@nb/presentation/rest/auth/sign-up/sign-up.module";
import { SignInModule } from "@nb/presentation/rest/auth/sign-in/sign-in.module";
import { JwtModule } from "@nestjs/jwt";
import { ExamplesModule } from "@nb/presentation/rest/examples/examples/examples.module";
import { JwtConfigFactory } from "@nb/infrastructure/jwt/factories/jwt-config.factory";

@Module({
  imports: [
    JwtModule.registerAsync({ useClass: JwtConfigFactory, global: true }),
    SignUpModule,
    SignInModule,
    ExamplesModule,
  ],
})
export class RestModule {
}