import { BaseObject } from "@nb/domain/interfaces/base/base-object";
import { Board } from "@nb/domain/interfaces/boards/board";

export interface User extends BaseObject {
  email: string;
  passwordHash: string;
  boards: Board[];
}
