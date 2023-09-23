import { Category } from "@nb/domain/interfaces/entities/categories/category";

export interface CategoryCreateFeatureParams {
  userId: string;
  name: string;
}

export interface CategoryCreateFeatureResult {
  category: Category;
}
