import { PrismaService } from "@nb/infrastructure/database/prisma/services/prisma.service";
import { UserMapper } from "@nb/dao/mappers/user.mapper";
import { UserModel } from "@nb/application/users/models/user.model";
import { IUserRepository, USER_REPOSITORY } from "@nb/application/users/interfaces/user.repository";

class UserRepository implements IUserRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async create(params: { email: string, passwordHash: string }): Promise<UserModel> {
    const user = await this.prisma.user.create({
      data: {
        email: params.email,
        passwordHash: params.passwordHash,
      },
    });

    return UserMapper.toDomain(user);
  }
}

export const UserRepositoryProvider = {
  provide: USER_REPOSITORY,
  useClass: UserRepository,
};