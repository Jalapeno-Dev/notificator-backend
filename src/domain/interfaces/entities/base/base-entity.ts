export interface BaseEntity {
  readonly id: string;
  readonly createdAt: string;
  updatedAt: string;
  deletedAt?: string;

  get idPrefix(): string;

  get isDeleted(): boolean;
}
