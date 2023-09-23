import { Category } from "@nb/domain/interfaces/entities/categories/category";

export interface CategoryGetOneFeatureParams {
  userId: string;
  categoryId: string;
}

export interface CategoryGetOneFeatureResult {
  category: Category;
}
