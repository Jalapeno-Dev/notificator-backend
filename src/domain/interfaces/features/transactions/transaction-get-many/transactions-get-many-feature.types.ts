import { Transaction } from "@nb/domain/interfaces/entities/transactions/transaction";

export interface TransactionsGetManyFeatureParams {
  userId: string;
  boardId: string;
}

export interface TransactionsGetManyFeatureResult {
  transactions: Transaction[];
}
