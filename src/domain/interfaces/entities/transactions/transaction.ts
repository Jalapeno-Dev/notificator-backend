import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { User } from "@nb/domain/interfaces/entities/users/user";
import { Board } from "@nb/domain/interfaces/entities/boards/board";
import { TransactionTypeKind } from "@nb/domain/interfaces/entities/transactions/transaction.types";
import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";

export interface Transaction extends BaseEntity {
  amount: number;
  type: TransactionTypeKind;
  userId: string;
  boardId: string;
  itemId: string;

  user: User;
  board: Board;
  item: CategoryItem;
}
