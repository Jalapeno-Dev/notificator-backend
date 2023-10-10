import { UserModel } from "@nb/application/users/models/user.model";

export interface GetBoardMembersResult {
  members: UserModel[];
  ownerId: string;
}