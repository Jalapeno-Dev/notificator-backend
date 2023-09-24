import { Board } from "@nb/domain/interfaces/entities/boards/board";

export interface BoardGetManyFeatureParams {
  userId: string;
}

export interface BoardGetManyFeatureResult {
  boards: Board[];
}
