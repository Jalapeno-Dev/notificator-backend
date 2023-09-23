
import { BoardGetManyFeatureParams, BoardGetManyFeatureResult } from './board-get-many-feature.types';

export interface BoardGetManyFeatureInterface {
  boardGetMany(params: BoardGetManyFeatureParams): BoardGetManyFeatureResult | Promise<BoardGetManyFeatureResult>;
}
