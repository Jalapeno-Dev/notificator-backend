import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetBoardsService } from "@nb/application/boards/services/get-boards.service";
import { BoardResponseDto } from "@nb/presentation/rest/boards/common/dtos/board-response.dto";
import { IAM } from "@nb/infrastructure/jwt/decorators/iam.decorator";
import { JwtAuthGuard } from "@nb/infrastructure/jwt/guards/jwt-auth.guard";

@ApiTags("boards")
@ApiBearerAuth()
@Controller("boards")
@UseGuards(JwtAuthGuard)
export class GetBoardsController {
  constructor(
    private readonly getBoardsService: GetBoardsService,
  ) {
  }

  @ApiOperation({ summary: "Get all available boards" })
  @ApiOkResponse({ type: BoardResponseDto, isArray: true })
  @Get()
  async getBoards(
    @IAM("id") userId: string,
  ): Promise<BoardResponseDto[]> {
    return this.getBoardsService.execute(userId);
  }
}
