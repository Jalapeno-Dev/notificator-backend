
import { BoardGetOneFeatureParams, BoardGetOneFeatureResult } from './board-get-one-feature.types';

export interface BoardGetOneFeatureInterface {
  boardGetOne(params: BoardGetOneFeatureParams): BoardGetOneFeatureResult | Promise<BoardGetOneFeatureResult>;
}
