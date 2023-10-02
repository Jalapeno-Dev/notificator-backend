import { Module } from "@nestjs/common";
import { SignUpModule } from "@nb/presentation/rest/auth/sign-up/sign-up.module";
import { SignInModule } from "@nb/presentation/rest/auth/sign-in/sign-in.module";

@Module({
  imports: [
    SignUpModule,
    SignInModule,
  ],
})
export class RestModule {
}