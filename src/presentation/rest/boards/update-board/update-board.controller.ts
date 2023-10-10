import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Param, ParseUUIDPipe, Patch, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@nb/infrastructure/jwt/guards/jwt-auth.guard";
import { UpdateBoardService } from "@nb/application/boards/services/update-board.service";
import { BoardResponseDto } from "@nb/presentation/rest/boards/common/dtos/board-response.dto";
import { IAM } from "@nb/infrastructure/jwt/decorators/iam.decorator";
import { UpdateBoardRequestDto } from "@nb/presentation/rest/boards/update-board/dtos/update-board-request.dto";

@ApiTags("boards")
@ApiBearerAuth()
@Controller("boards")
@UseGuards(JwtAuthGuard)
export class UpdateBoardController {
  constructor(
    private readonly updateBoardService: UpdateBoardService,
  ) {
  }

  @ApiOperation({ summary: "Update a board" })
  @ApiOkResponse({ type: BoardResponseDto })
  @Patch(":id")
  async updateBoard(
    @IAM("id") userId: string,
    @Param("id", ParseUUIDPipe) boardId: string,
    @Body() body: UpdateBoardRequestDto,
  ) {
    return this.updateBoardService.execute({ userId, boardId }, { name: body.name });
  }
}