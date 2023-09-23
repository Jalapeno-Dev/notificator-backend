import { User } from "@nb/domain/interfaces/entities/users/user";

export interface BoardGetMembersFeatureParams {
  userId: string;
  boardId: string;
}

export interface BoardGetMembersFeatureResult {
  members: Omit<User, "passwordHash">[];
}
