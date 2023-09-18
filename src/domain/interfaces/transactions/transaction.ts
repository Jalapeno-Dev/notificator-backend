import { BaseObject } from "@nb/domain/interfaces/base/base-object";
import { User } from "@nb/domain/interfaces/users/user";
import { Board } from "@nb/domain/interfaces/boards/board";
import { TransactionTypeKind } from "@nb/domain/interfaces/transactions/transaction.types";
import { CategoryItem } from "@nb/domain/interfaces/category-items/category-item";

export interface Transaction extends BaseObject {
  amount: number;
  type: TransactionTypeKind;
  userId: string;
  boardId: string;
  itemId: string;

  user: User;
  board: Board;
  item: CategoryItem;
}
