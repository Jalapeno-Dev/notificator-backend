import { Module } from "@nestjs/common";
import { GetBoardMembersController } from "@nb/presentation/rest/boards/get-board-members/get-board-members.controller";
import { GetBoardMembersService } from "@nb/application/boards/services/get-board-members/get-board-members.service";

@Module({
  controllers: [GetBoardMembersController],
  providers: [GetBoardMembersService],
})
export class GetBoardMembersModule {
}