import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { User } from "@nb/domain/interfaces/entities/users/user";

export interface Board extends BaseEntity {
  name: string;
  ownerId: string;
  owner?: User;
  members?: User[];
}
