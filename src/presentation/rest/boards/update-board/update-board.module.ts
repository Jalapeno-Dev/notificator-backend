import { Module } from "@nestjs/common";
import { UpdateBoardController } from "@nb/presentation/rest/boards/update-board/update-board.controller";
import { UpdateBoardService } from "@nb/application/boards/services/update-board.service";

@Module({
  controllers: [
    UpdateBoardController,
  ],
  providers: [UpdateBoardService],
})
export class UpdateBoardModule {
}
