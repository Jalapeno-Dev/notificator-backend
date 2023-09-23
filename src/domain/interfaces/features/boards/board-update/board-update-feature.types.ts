import { Board } from "@nb/domain/interfaces/entities/boards/board";

export interface BoardUpdateFeatureParams {
  userId: string;
  boardId: string;
  board: {
    name: string;
  };
}

export interface BoardUpdateFeatureResult {
  board: Board;
}
