import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";

export interface CategoryItemUpdateFeatureParams {
  userId: string;
  categoryItemId: string;
  description: string;
}

export interface CategoryItemUpdateFeatureResult {
  categoryItem: CategoryItem;
}
