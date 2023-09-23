
import { CategoryItemUpdateFeatureParams, CategoryItemUpdateFeatureResult } from './category-item-update-feature.types';

export interface CategoryItemUpdateFeatureInterface {
  categoryItemUpdate(params: CategoryItemUpdateFeatureParams): CategoryItemUpdateFeatureResult | Promise<CategoryItemUpdateFeatureResult>;
}
