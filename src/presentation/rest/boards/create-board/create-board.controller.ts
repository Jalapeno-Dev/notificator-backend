import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateBoardService } from "@nb/application/boards/services/create-board.service";
import { BoardResponseDto } from "@nb/presentation/rest/boards/common/dtos/board-response.dto";
import { CreateBoardRequestDto } from "@nb/presentation/rest/boards/create-board/dtos/create-board-request.dto";
import { IAM } from "@nb/infrastructure/jwt/decorators/iam.decorator";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@nb/infrastructure/jwt/guards/jwt-auth.guard";

@ApiTags("boards")
@ApiBearerAuth()
@Controller("boards")
@UseGuards(JwtAuthGuard)
export class CreateBoardController {
  constructor(
    private readonly createBoardService: CreateBoardService,
  ) {
  }

  @Post()
  @ApiCreatedResponse({ type: BoardResponseDto })
  @ApiOperation({ summary: "Create new board" })
  async createBoard(
    @IAM("id") userId: string,
    @Body() dto: CreateBoardRequestDto): Promise<BoardResponseDto> {
    return this.createBoardService.execute({ name: dto.name, userId });
  }
}