import { Module } from "@nestjs/common";
import { GetBoardByIdController } from "@nb/presentation/rest/boards/get-board-by-id/get-board-by-id.controller";
import { GetBoardByIdService } from "@nb/application/boards/services/get-board-by-id.service";

@Module({
  controllers: [GetBoardByIdController],
  providers: [GetBoardByIdService],
})
export class GetBoardByIdModule {
}
