import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { Category } from "@nb/domain/interfaces/entities/categories/category";

export interface CategoryItem extends BaseEntity {
  categoryId: string;
  description: string;

  category?: Category;
}