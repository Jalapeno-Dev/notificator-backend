
import { BoardCreateFeatureParams, BoardCreateFeatureResult } from './board-create-feature.types';

export interface BoardCreateFeatureInterface {
  boardCreate(params: BoardCreateFeatureParams): BoardCreateFeatureResult | Promise<BoardCreateFeatureResult>;
}
