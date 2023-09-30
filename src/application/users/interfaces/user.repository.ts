import { UserModel } from "@nb/application/users/models/user.model";

export const USER_REPOSITORY = Symbol.for("USER_REPOSITORY");

export interface IUserRepository {
  create(params: {
    email: string,
    passwordHash: string,
  }): Promise<UserModel>;

  countByEmail(email: string): Promise<number>;
}