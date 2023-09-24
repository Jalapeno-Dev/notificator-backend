import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";

export interface CategoryGetItemsFeatureParams {
  userId: string;
  categoryId: string;
}

export interface CategoryGetItemsFeatureResult {
  items: CategoryItem[];
}
