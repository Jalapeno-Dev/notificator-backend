import { Module } from "@nestjs/common";
import { UserRepositoryProvider } from "@nb/infrastructure/database/prisma/repositories/user.repository";
import { PrismaInternalModule } from "@nb/infrastructure/database/prisma/internal/prisma-internal.module";

@Module({
  imports: [PrismaInternalModule],
  providers: [UserRepositoryProvider],
  exports: [UserRepositoryProvider],
})
export class PrismaModule {
}
