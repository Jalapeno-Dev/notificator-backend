import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Param, ParseUUIDPipe, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@nb/infrastructure/jwt/guards/jwt-auth.guard";
import { GetBoardMembersService } from "@nb/application/boards/services/get-board-members/get-board-members.service";
import { IAM } from "@nb/infrastructure/jwt/decorators/iam.decorator";
import {
  BoardMembersResponseDto,
} from "@nb/presentation/rest/boards/get-board-members/dtos/board-members-response.dto";

@ApiTags("boards")
@ApiBearerAuth()
@Controller("boards")
@UseGuards(JwtAuthGuard)
export class GetBoardMembersController {
  constructor(
    private readonly getBoardMembersService: GetBoardMembersService,
  ) {
  }

  @ApiOperation({ summary: "Get board members" })
  @ApiOkResponse({ type: BoardMembersResponseDto })
  @Get(":id/members")
  async getBoardMembers(
    @IAM("id") userId: string,
    @Param("id", ParseUUIDPipe) boardId: string,
  ) {
    const result = await this.getBoardMembersService.execute({
      boardId,
      userId,
    });

    return new BoardMembersResponseDto(result.members, result.ownerId);
  }
}