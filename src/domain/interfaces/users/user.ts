import { BaseObject } from "@nb/domain/interfaces/base/base-object";
import { Board } from "@nb/domain/interfaces/boards/board";
import { Transaction } from "@nb/domain/interfaces/transactions/transaction";

export interface User extends BaseObject {
  email: string;
  passwordHash: string;
  boards: Board[];
  transactions: Transaction[];
}
