
import { TransactionDeleteFeatureParams, TransactionDeleteFeatureResult } from './transaction-delete-feature.types';

export interface TransactionDeleteFeatureInterface {
  transactionDelete(params: TransactionDeleteFeatureParams): TransactionDeleteFeatureResult | Promise<TransactionDeleteFeatureResult>;
}
