
import { CategoryItemDeleteFeatureParams, CategoryItemDeleteFeatureResult } from './category-item-delete-feature.types';

export interface CategoryItemDeleteFeatureInterface {
  categoryItemDelete(params: CategoryItemDeleteFeatureParams): CategoryItemDeleteFeatureResult | Promise<CategoryItemDeleteFeatureResult>;
}
