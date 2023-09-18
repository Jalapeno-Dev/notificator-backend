import { BaseObject } from "@nb/domain/interfaces/base/base-object";
import { CategoryItem } from "@nb/domain/interfaces/category-items/category-item";

export interface Category extends BaseObject {
  name: string;
  items: CategoryItem[];
}
