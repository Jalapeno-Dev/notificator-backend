import { UserGetSelfFeatureParams, UserGetSelfFeatureResult } from "./user-get-self-feature.types";

export interface UserGetSelfFeatureInterface {
  usersGetSelf(params: UserGetSelfFeatureParams): UserGetSelfFeatureResult | Promise<UserGetSelfFeatureResult>;
}
