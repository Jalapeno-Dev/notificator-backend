import { Module } from "@nestjs/common";
import { UserRepositoryProvider } from "@nb/infrastructure/database/prisma/repositories/user.repository";
import { PrismaInternalModule } from "@nb/infrastructure/database/prisma/internal/prisma-internal.module";
import { BoardRepositoryProvider } from "@nb/infrastructure/database/prisma/repositories/board.repository";

const repositoryProviders = [
  UserRepositoryProvider,
  BoardRepositoryProvider,
];

@Module({
  imports: [PrismaInternalModule],
  providers: [...repositoryProviders],
  exports: [...repositoryProviders],
})
export class PrismaModule {
}
