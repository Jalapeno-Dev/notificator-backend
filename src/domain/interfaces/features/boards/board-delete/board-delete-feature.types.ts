import { Board } from "@nb/domain/interfaces/entities/boards/board";

export interface BoardDeleteFeatureParams {
  boardId: string;
  requesterId: string;
}

export interface BoardDeleteFeatureResult {
  board: Omit<Board, "deletedAt"> & { deletedAt: string };
}
