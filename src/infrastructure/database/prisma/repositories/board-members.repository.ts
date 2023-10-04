import {
  BOARD_MEMBERS_REPOSITORY,
  IBoardMembersRepository,
} from "@nb/application/boards/interfaces/board-members.repository";
import { PrismaService } from "@nb/infrastructure/database/prisma/internal/services/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
class BoardMembersRepository implements IBoardMembersRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async exists(params: { boardId: string; userId: string }): Promise<boolean> {
    const count = await this.prisma.boardMember.count({
      where: {
        boardId: params.boardId,
        userId: params.userId,
      },
    });

    return count > 0;
  }
}

export const BoardMembersRepositoryProvider = {
  provide: BOARD_MEMBERS_REPOSITORY,
  useClass: BoardMembersRepository,
};