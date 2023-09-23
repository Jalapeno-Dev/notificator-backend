
import { CategoryGetManyFeatureParams, CategoryGetManyFeatureResult } from './category-get-many-feature.types';

export interface CategoryGetManyFeatureInterface {
  categoryGetMany(params: CategoryGetManyFeatureParams): CategoryGetManyFeatureResult | Promise<CategoryGetManyFeatureResult>;
}
