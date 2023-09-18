import { BaseObject } from "@nb/domain/interfaces/base/base-object";
import { Category } from "@nb/domain/interfaces/categories/category";

export interface CategoryItem extends BaseObject {
  boardId: string;
  categoryId: string;
  description: string;

  category: Category;
}