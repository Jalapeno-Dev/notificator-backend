import { Module } from "@nestjs/common";
import { SignUpModule } from "@nb/presentation/rest/auth/sign-up/sign-up.module";
import { SignInModule } from "@nb/presentation/rest/auth/sign-in/sign-in.module";
import { ExamplesModule } from "@nb/presentation/rest/examples/examples/examples.module";
import { JwtModule } from "@nb/infrastructure/jwt/jwt.module";
import { ScryptoModule } from "@nb/infrastructure/scrypt/scrypto.module";
import { CreateBoardModule } from "@nb/presentation/rest/boards/create-board/create-board.module";

@Module({
  imports: [
    JwtModule,
    ScryptoModule,
    SignUpModule,
    SignInModule,
    CreateBoardModule,
    ExamplesModule,
  ],
})
export class RestModule {
}