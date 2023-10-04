import { Module } from "@nestjs/common";
import { CreateBoardController } from "@nb/presentation/rest/boards/create-board/create-board.controller";
import { CreateBoardService } from "@nb/application/boards/services/create-board.service";

@Module({
  controllers: [CreateBoardController],
  providers: [CreateBoardService],
})
export class CreateBoardModule {
}