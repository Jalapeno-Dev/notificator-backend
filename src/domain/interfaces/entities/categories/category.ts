import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";

export interface Category extends BaseEntity {
  name: string;
  items: CategoryItem[];
}
