
import { CategoryGetItemsFeatureParams, CategoryGetItemsFeatureResult } from './category-get-items-feature.types';

export interface CategoryGetItemsFeatureInterface {
  categoryGetItems(params: CategoryGetItemsFeatureParams): CategoryGetItemsFeatureResult | Promise<CategoryGetItemsFeatureResult>;
}
