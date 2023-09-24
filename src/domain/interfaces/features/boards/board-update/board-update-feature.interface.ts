
import { BoardUpdateFeatureParams, BoardUpdateFeatureResult } from './board-update-feature.types';

export interface BoardUpdateFeatureInterface {
  boardUpdate(params: BoardUpdateFeatureParams): BoardUpdateFeatureResult | Promise<BoardUpdateFeatureResult>;
}
