import { BaseObject } from "@nb/domain/entities/base/base-object";
import { User } from "@nb/domain/entities/users/user";

export interface Board extends BaseObject {
  name: string;
  ownerId: string;
  owner: User;
  members: Array<User>;
}
