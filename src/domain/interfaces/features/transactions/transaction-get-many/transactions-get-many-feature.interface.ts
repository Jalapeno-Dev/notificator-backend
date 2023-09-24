
import { TransactionsGetManyFeatureParams, TransactionsGetManyFeatureResult } from './transactions-get-many-feature.types';

export interface TransactionsGetManyFeatureInterface {
  transactionsGetMany(params: TransactionsGetManyFeatureParams): TransactionsGetManyFeatureResult | Promise<TransactionsGetManyFeatureResult>;
}
