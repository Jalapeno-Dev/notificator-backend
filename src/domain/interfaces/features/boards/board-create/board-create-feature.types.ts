import { Board } from "@nb/domain/interfaces/entities/boards/board";

export interface BoardCreateFeatureParams {
  name: string;
  ownerId: string;
}

export interface BoardCreateFeatureResult {
  board: Board;
}
