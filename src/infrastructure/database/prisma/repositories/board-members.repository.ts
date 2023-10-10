import {
  BOARD_MEMBERS_REPOSITORY,
  IBoardMembersRepository,
} from "@nb/application/boards/interfaces/board-members.repository";
import { PrismaService } from "@nb/infrastructure/database/prisma/internal/services/prisma.service";
import { Injectable } from "@nestjs/common";
import { UserModel } from "@nb/application/users/models/user.model";

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

  async findByBoardId(boardId: string): Promise<UserModel[]> {
    try {
      const boardMembers = await this.prisma.boardMember.findMany({
        where: {
          boardId,
        },
        include: {
          user: true,
        },
      });

      return boardMembers.map(boardMember => boardMember.user);
    } catch (error) {
      throw error;
    }
  }
}

export const BoardMembersRepositoryProvider = {
  provide: BOARD_MEMBERS_REPOSITORY,
  useClass: BoardMembersRepository,
};