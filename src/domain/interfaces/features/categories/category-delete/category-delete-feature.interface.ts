
import { CategoryDeleteFeatureParams, CategoryDeleteFeatureResult } from './category-delete-feature.types';

export interface CategoryDeleteFeatureInterface {
  categoryDelete(params: CategoryDeleteFeatureParams): CategoryDeleteFeatureResult | Promise<CategoryDeleteFeatureResult>;
}
