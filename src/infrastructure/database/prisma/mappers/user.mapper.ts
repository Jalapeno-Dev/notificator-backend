import { User } from "@prisma/client";
import { UserModel } from "@nb/application/users/models/user.model";

export class UserMapper {
  static toDomain(user: User): UserModel {
    return Object.assign(new UserModel(), {
      id: user.id,
      email: user.email,
      passwordHash: user.passwordHash,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
    });
  }
}