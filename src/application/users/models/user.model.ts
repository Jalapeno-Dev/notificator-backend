export class UserModel {
  readonly id!: string;
  email!: string;
  passwordHash!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date | null;
}