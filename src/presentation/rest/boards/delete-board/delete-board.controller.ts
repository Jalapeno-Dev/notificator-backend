import { Controller, Delete, HttpCode, HttpStatus, Param, ParseUUIDPipe, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@nb/infrastructure/jwt/guards/jwt-auth.guard";
import { DeleteBoardService } from "@nb/application/boards/services/delete-board.service";
import { IAM } from "@nb/infrastructure/jwt/decorators/iam.decorator";

@ApiTags("boards")
@ApiBearerAuth()
@Controller("boards/:id")
@UseGuards(JwtAuthGuard)
export class DeleteBoardController {
  constructor(
    private readonly deleteBoardService: DeleteBoardService,
  ) {
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete board" })
  async deleteBoard(
    @IAM("id") userId: string,
    @Param("id", ParseUUIDPipe) boardId: string): Promise<void> {
    await this.deleteBoardService.execute({ boardId, userId });
  }
}