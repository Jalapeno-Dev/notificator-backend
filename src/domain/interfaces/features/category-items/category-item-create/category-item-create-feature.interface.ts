
import { CategoryItemCreateFeatureParams, CategoryItemCreateFeatureResult } from './category-item-create-feature.types';

export interface CategoryItemCreateFeatureInterface {
  categoryItemCreate(params: CategoryItemCreateFeatureParams): CategoryItemCreateFeatureResult | Promise<CategoryItemCreateFeatureResult>;
}
