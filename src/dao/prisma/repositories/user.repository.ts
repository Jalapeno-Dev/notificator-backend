import { PrismaService } from "@nb/infrastructure/database/prisma/services/prisma.service";
import { UserMapper } from "@nb/dao/prisma/mappers/user.mapper";
import { UserModel } from "@nb/application/users/models/user.model";
import { IUserRepository, USER_REPOSITORY } from "@nb/application/users/interfaces/user.repository";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable()
class UserRepository implements IUserRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async create(params: { email: string, passwordHash: string }): Promise<UserModel> {
    const user: User = await this.prisma.user.create({
      data: {
        email: params.email,
        passwordHash: params.passwordHash,
      },
    });

    return UserMapper.toDomain(user);
  }

  async countByEmail(email: string): Promise<number> {
    return this.prisma.user.count({ where: { email } });
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const user: User | null = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      return null;
    }

    return UserMapper.toDomain(user);
  }

  async findById(id: string): Promise<UserModel | null> {
    const user: User | null = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      return null;
    }

    return UserMapper.toDomain(user);
  }
}

export const UserRepositoryProvider = {
  provide: USER_REPOSITORY,
  useClass: UserRepository,
};