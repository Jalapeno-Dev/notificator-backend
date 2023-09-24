
import { BoardInviteMemberFeatureParams, BoardInviteMemberFeatureResult } from './board-invite-member-feature.types';

export interface BoardInviteMemberFeatureInterface {
  boardInviteMember(params: BoardInviteMemberFeatureParams): BoardInviteMemberFeatureResult | Promise<BoardInviteMemberFeatureResult>;
}
