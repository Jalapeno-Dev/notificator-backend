
import { BoardCancelMemberInviteFeatureParams, BoardCancelMemberInviteFeatureResult } from './board-cancel-member-invite-feature.types';

export interface BoardCancelMemberInviteFeatureInterface {
  boardCancelMemberInvite(params: BoardCancelMemberInviteFeatureParams): BoardCancelMemberInviteFeatureResult | Promise<BoardCancelMemberInviteFeatureResult>;
}
