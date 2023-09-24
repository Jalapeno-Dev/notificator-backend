import { OperationStatusKind } from "@nb/domain/types/common/operation-status.kind";

export interface BoardCancelMemberInviteFeatureParams {
  boardId: string;
  requesterId: string;
  invitedUserId: string;
}

export interface BoardCancelMemberInviteFeatureResult {
  status: OperationStatusKind;
}