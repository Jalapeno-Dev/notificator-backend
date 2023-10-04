export class BoardModel {
  readonly id!: string;
  name!: string;
  ownerId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date | null;
}