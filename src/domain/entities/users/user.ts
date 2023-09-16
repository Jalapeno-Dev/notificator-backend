import { BaseObject } from "@nb/domain/entities/base/base-object";
import { Board } from "@nb/domain/entities/boards/board";

export interface User extends BaseObject {
  email: string;
  passwordHash: string;
  boards: Array<Board>;
}
