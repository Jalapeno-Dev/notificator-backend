
import { BoardGetMembersFeatureParams, BoardGetMembersFeatureResult } from './board-get-members-feature.types';

export interface BoardGetMembersFeatureInterface {
  boardGetMembers(params: BoardGetMembersFeatureParams): BoardGetMembersFeatureResult | Promise<BoardGetMembersFeatureResult>;
}
