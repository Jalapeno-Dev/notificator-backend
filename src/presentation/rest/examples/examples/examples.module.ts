import { Module } from "@nestjs/common";
import { ExamplesController } from "@nb/presentation/rest/examples/examples/examples.controller";
import { UserRepositoryProvider } from "@nb/dao/prisma/repositories/user.repository";

@Module({
  controllers: [ExamplesController],
  providers: [
    UserRepositoryProvider,
  ]
})
export class ExamplesModule {}