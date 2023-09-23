
import { BoardKickMemberFeatureParams, BoardKickMemberFeatureResult } from './board-kick-member-feature.types';

export interface BoardKickMemberFeatureInterface {
  boardKickMember(params: BoardKickMemberFeatureParams): BoardKickMemberFeatureResult | Promise<BoardKickMemberFeatureResult>;
}
