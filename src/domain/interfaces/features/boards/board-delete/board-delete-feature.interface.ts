
import { BoardDeleteFeatureParams, BoardDeleteFeatureResult } from './board-delete-feature.types';

export interface BoardDeleteFeatureInterface {
  boardDelete(params: BoardDeleteFeatureParams): BoardDeleteFeatureResult | Promise<BoardDeleteFeatureResult>;
}
