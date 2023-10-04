import { BOARD_REPOSITORY, IBoardRepository } from "@nb/application/boards/interfaces/boards.repository";
import { BoardModel } from "@nb/application/boards/models/board.model";
import { PrismaService } from "@nb/infrastructure/database/prisma/internal/services/prisma.service";
import { Board } from "@prisma/client";
import { BoardMapper } from "@nb/infrastructure/database/prisma/mappers/board.mapper";
import { Injectable, Provider } from "@nestjs/common";

@Injectable()
class BoardRepository implements IBoardRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async create(params: { name: string; ownerId: string }): Promise<BoardModel> {
    const board: Board = await this.prisma.board.create({
      data: {
        name: params.name,
        ownerId: params.ownerId,
        members: {
          create: {
            userId: params.ownerId,
          },
        },
      },
    });

    return BoardMapper.toDomain(board);
  }

  async findById(id: string): Promise<BoardModel | null> {
    const board: Board | null = await this.prisma.board.findUnique({ where: { id } });

    if (!board) {
      return null;
    }

    return BoardMapper.toDomain(board);
  }

  async findAvailableByUserId(userId: string): Promise<BoardModel[]> {
    const boards: Board[] = await this.prisma.board.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
    });

    return boards.map(BoardMapper.toDomain);
  }
}

export const BoardRepositoryProvider: Provider = {
  provide: BOARD_REPOSITORY,
  useClass: BoardRepository,
};