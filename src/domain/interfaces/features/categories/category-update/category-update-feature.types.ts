import { Category } from "@nb/domain/interfaces/entities/categories/category";

export interface CategoryUpdateFeatureParams {
  userId: string;
  categoryId: string;
  category: {
    name: string;
  };
}

export interface CategoryUpdateFeatureResult {
  category: Category;
}
