import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";

export interface CategoryItemCreateFeatureParams {
  userId: string;
  boardId: string;
  categoryId: string;
  description: string;
}

export interface CategoryItemCreateFeatureResult {
  categoryItem: CategoryItem;
}
