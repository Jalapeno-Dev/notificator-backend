import { BaseEntity } from "@nb/domain/interfaces/entities/base/base-entity";

export interface BoardCategory extends BaseEntity {
  boardId: string;
  categoryId: string;
}