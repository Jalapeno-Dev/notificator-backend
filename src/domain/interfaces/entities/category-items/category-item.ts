import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { Category } from "@nb/domain/interfaces/entities/categories/category";

export interface CategoryItem extends BaseEntity {
  boardId: string;
  categoryId: string;
  description: string;

  category: Category;
}