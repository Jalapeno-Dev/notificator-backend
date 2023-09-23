import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";
import { User } from "@nb/domain/interfaces/entities/users/user";

export interface Category extends BaseEntity {
  name: string;
  userId: string;

  user?: User;
  items?: CategoryItem[];
}
