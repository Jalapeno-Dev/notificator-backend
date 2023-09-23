import { OperationStatusKind } from "@nb/domain/types/common/operation-status.kind";

export interface BoardKickMemberFeatureParams {
  boardId: string;
  requesterId: string;
  kickedUserId: string;
}

export interface BoardKickMemberFeatureResult {
  status: OperationStatusKind;
}
