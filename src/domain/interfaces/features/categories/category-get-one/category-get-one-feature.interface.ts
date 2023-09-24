
import { CategoryGetOneFeatureParams, CategoryGetOneFeatureResult } from './category-get-one-feature.types';

export interface CategoryGetOneFeatureInterface {
  categoryGetOne(params: CategoryGetOneFeatureParams): CategoryGetOneFeatureResult | Promise<CategoryGetOneFeatureResult>;
}
