import { BoardModel } from "@nb/application/boards/models/board.model";

export const BOARD_REPOSITORY = Symbol.for("BOARD_REPOSITORY");

export interface IBoardRepository {
  create(params: { name: string, ownerId: string }): Promise<BoardModel>;

  findById(id: string): Promise<BoardModel | null>;

  findAvailableByUserId(userId: string): Promise<BoardModel[]>;

  updateById(id: string, updates: { name: string }): Promise<BoardModel>;

  deleteById(id: string): Promise<{ deleted: boolean }>;
}