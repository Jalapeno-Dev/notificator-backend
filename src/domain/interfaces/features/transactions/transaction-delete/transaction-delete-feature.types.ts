import { Transaction } from "@nb/domain/interfaces/entities/transactions/transaction";

export interface TransactionDeleteFeatureParams {
  transactionId: string;
  userId: string;
}

export interface TransactionDeleteFeatureResult {
  transaction: Omit<Transaction, "deletedAt"> & { deletedAt: string };
}
