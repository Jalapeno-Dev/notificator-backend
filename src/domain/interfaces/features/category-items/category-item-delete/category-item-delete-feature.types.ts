import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";

export interface CategoryItemDeleteFeatureParams {
  userId: string;
  categoryItemId: string;
}

export interface CategoryItemDeleteFeatureResult {
  categoryItem: Omit<CategoryItem, "deletedAt"> & { deletedAt: string };
}
