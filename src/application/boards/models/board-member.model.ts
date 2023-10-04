export class BoardMemberModel {
  id!: string;
  boardId!: string;
  userId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date | null;
}