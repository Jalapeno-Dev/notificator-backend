import { Module } from "@nestjs/common";
import { SignUpModule } from "@nb/presentation/rest/auth/sign-up/sign-up.module";
import { SignInModule } from "@nb/presentation/rest/auth/sign-in/sign-in.module";
import { ExamplesModule } from "@nb/presentation/rest/examples/examples/examples.module";
import { JwtModule } from "@nb/infrastructure/jwt/jwt.module";
import { ScryptoModule } from "@nb/infrastructure/scrypt/scrypto.module";
import { GetBoardByIdModule } from "@nb/presentation/rest/boards/get-board-by-id/get-board-by-id.module";
import { CreateBoardModule } from "@nb/presentation/rest/boards/create-board/create-board.module";
import { GetBoardsModule } from "@nb/presentation/rest/boards/get-boards/get-boards.module";
import { UpdateBoardModule } from "@nb/presentation/rest/boards/update-board/update-board.module";

@Module({
  imports: [
    JwtModule,
    ScryptoModule,
    SignUpModule,
    SignInModule,
    GetBoardsModule,
    GetBoardByIdModule,
    CreateBoardModule,
    UpdateBoardModule,
    ExamplesModule,
  ],
})
export class RestModule {
}