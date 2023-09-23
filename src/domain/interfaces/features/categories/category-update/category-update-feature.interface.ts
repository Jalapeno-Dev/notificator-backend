
import { CategoryUpdateFeatureParams, CategoryUpdateFeatureResult } from './category-update-feature.types';

export interface CategoryUpdateFeatureInterface {
  categoryUpdate(params: CategoryUpdateFeatureParams): CategoryUpdateFeatureResult | Promise<CategoryUpdateFeatureResult>;
}
