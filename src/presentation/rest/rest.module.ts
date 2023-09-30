import { Module } from "@nestjs/common";
import { SignUpModule } from "@nb/presentation/rest/auth/sign-up/sign-up.module";

@Module({
  imports: [SignUpModule],
})
export class RestModule {
}