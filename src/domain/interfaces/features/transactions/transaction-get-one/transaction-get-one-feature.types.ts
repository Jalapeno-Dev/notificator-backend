import { Transaction } from "@nb/domain/interfaces/entities/transactions/transaction";

export interface TransactionGetOneFeatureParams {
  transactionId: string;
  userId: string;
}

export interface TransactionGetOneFeatureResult {
  transaction: Transaction;
}
