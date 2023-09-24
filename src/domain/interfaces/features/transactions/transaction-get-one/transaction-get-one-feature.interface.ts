
import { TransactionGetOneFeatureParams, TransactionGetOneFeatureResult } from './transaction-get-one-feature.types';

export interface TransactionGetOneFeatureInterface {
  transactionGetOne(params: TransactionGetOneFeatureParams): TransactionGetOneFeatureResult | Promise<TransactionGetOneFeatureResult>;
}
