import { Category } from "@nb/domain/interfaces/entities/categories/category";

export interface CategoryGetManyFeatureParams {
  userId: string;
}

export interface CategoryGetManyFeatureResult {
  categories: Category[];
}
