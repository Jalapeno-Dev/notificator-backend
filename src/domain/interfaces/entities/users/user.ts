import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { Board } from "@nb/domain/interfaces/entities/boards/board";
import { Transaction } from "@nb/domain/interfaces/entities/transactions/transaction";

export interface User extends BaseEntity {
  email: string;
  passwordHash: string;
  boards?: Board[];
  transactions?: Transaction[];
}
