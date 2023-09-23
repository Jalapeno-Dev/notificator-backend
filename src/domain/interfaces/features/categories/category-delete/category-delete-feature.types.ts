import { Category } from "@nb/domain/interfaces/entities/categories/category";

export interface CategoryDeleteFeatureParams {
  userId: string;
  categoryId: string;
}

export interface CategoryDeleteFeatureResult {
  category: Omit<Category, "deletedAt"> & { deletedAt: string };
}
