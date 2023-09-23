
import { TransactionCreateFeatureParams, TransactionCreateFeatureResult } from './transactions-create-feature.types';

export interface TransactionCreateFeatureInterface {
  transactionCreate(params: TransactionCreateFeatureParams): TransactionCreateFeatureResult | Promise<TransactionCreateFeatureResult>;
}
