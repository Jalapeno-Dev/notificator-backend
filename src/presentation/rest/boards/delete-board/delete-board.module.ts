import { Module } from "@nestjs/common";
import { DeleteBoardService } from "@nb/application/boards/services/delete-board.service";
import { DeleteBoardController } from "@nb/presentation/rest/boards/delete-board/delete-board.controller";

@Module({
  controllers: [DeleteBoardController],
  providers: [DeleteBoardService],
})
export class DeleteBoardModule {
}