
import { CategoryCreateFeatureParams, CategoryCreateFeatureResult } from './category-create-feature.types';

export interface CategoryCreateFeatureInterface {
  categoryCreate(params: CategoryCreateFeatureParams): CategoryCreateFeatureResult | Promise<CategoryCreateFeatureResult>;
}
