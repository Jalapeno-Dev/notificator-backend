import { BaseObject } from "@nb/domain/interfaces/base/base-object";
import { User } from "@nb/domain/interfaces/users/user";

export interface Board extends BaseObject {
  name: string;
  ownerId: string;
  owner: User;
  members: User[];
}
