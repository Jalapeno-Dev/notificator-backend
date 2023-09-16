import { BaseObject } from "@nb/domain/interfaces/base/base-object";
import { User } from "@nb/domain/interfaces/users/user";
import { Board } from "@nb/domain/interfaces/boards/board";
import { Category } from "@nb/domain/interfaces/categories/category";
import { TransactionTypeKind } from "@nb/domain/interfaces/transactions/transaction.types";

export interface Transaction extends BaseObject {
  amount: number;
  type: TransactionTypeKind;
  description: string;
  userId: string;
  boardId: string;
  categoryId: string;

  user: User;
  board: Board;
  category: Category;
}
