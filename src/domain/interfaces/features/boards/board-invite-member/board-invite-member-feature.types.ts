import { OperationStatusKind } from "@nb/domain/types/common/operation-status.kind";

export interface BoardInviteMemberFeatureParams {
  boardId: string;
  requesterId: string;
  invitedUserId: string;
}

export interface BoardInviteMemberFeatureResult {
  status: OperationStatusKind;
}
