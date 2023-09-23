import { User } from "@nb/domain/interfaces/entities/users/user";

export interface UserGetSelfFeatureParams {
  id: string;
}

export interface UserGetSelfFeatureResult {
  user: Omit<User, "passwordHash">;
}
