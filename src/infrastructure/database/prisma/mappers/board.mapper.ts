import { Board } from "@prisma/client";
import { BoardModel } from "@nb/application/boards/models/board.model";

export class BoardMapper {
  static toDomain(board: Board): BoardModel {
    return Object.assign(new BoardModel(), {
      id: board.id,
      name: board.name,
      ownerId: board.ownerId,
      createdAt: board.createdAt,
      updatedAt: board.updatedAt,
      deletedAt: board.deletedAt,
    });
  }
}