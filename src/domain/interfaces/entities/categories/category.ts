import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";
import { CategoryItem } from "@nb/domain/interfaces/entities/category-items/category-item";
import { Board } from "@nb/domain/interfaces/entities/boards/board";

export interface Category extends BaseEntity {
  name: string;
  boardId: string;

  board?: Board;
  items?: CategoryItem[];
}
