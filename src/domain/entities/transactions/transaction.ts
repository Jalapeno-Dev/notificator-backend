import { BaseObject } from "@nb/domain/entities/base/base-object";
import { User } from "@nb/domain/entities/users/user";
import { Board } from "@nb/domain/entities/boards/board";
import { Category } from "@nb/domain/entities/categories/category";
import { TransactionTypeKind } from "@nb/domain/entities/transactions/transaction.types";

export interface Transaction extends BaseObject {
  amount: number;
  type: TransactionTypeKind;
  description: string;

  user: User;
  board: Board;
  category: Category;
}
