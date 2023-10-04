import { Module } from "@nestjs/common";
import { GetBoardsController } from "@nb/presentation/rest/boards/get-boards/get-boards.controller";
import { GetBoardsService } from "@nb/application/boards/services/get-boards.service";

@Module({
  controllers: [GetBoardsController],
  providers: [GetBoardsService],
})
export class GetBoardsModule {
}
