import { TransactionTypeKind } from "@nb/domain/interfaces/entities/transactions/transaction.types";
import { Transaction } from "@nb/domain/interfaces/entities/transactions/transaction";

export interface TransactionCreateFeatureParams {
  amount: number;
  type: TransactionTypeKind;
  userId: string;
  boardId: string;
  itemId: string;
}

export interface TransactionCreateFeatureResult {
  transaction: Transaction;
}