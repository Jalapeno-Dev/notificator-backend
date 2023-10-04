import { Controller, Get, Param, ParseUUIDPipe, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetBoardByIdService } from "@nb/application/boards/services/get-board-by-id.service";
import { IAM } from "@nb/infrastructure/jwt/decorators/iam.decorator";
import { BoardResponseDto } from "@nb/presentation/rest/boards/common/dtos/board-response.dto";
import { JwtAuthGuard } from "@nb/infrastructure/jwt/guards/jwt-auth.guard";

@ApiTags("boards")
@ApiBearerAuth()
@Controller("boards")
@UseGuards(JwtAuthGuard)
export class GetBoardByIdController {
  constructor(
    private readonly getBoardByIdService: GetBoardByIdService,
  ) {
  }

  @ApiOperation({ summary: "Get board by id" })
  @ApiOkResponse({ type: BoardResponseDto })
  @Get(":id")
  async getBoardById(
    @IAM("id") userId: string,
    @Param("id", ParseUUIDPipe) boardId: string,
  ): Promise<BoardResponseDto> {
    return this.getBoardByIdService.execute({ userId, boardId });
  }
}