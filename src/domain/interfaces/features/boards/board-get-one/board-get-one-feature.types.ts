import { Board } from "@nb/domain/interfaces/entities/boards/board";

export interface BoardGetOneFeatureParams {
  boardId: string;
  userId: string;
}

export interface BoardGetOneFeatureResult {
  board: Board;
}
