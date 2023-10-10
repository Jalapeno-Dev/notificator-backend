import { Module } from "@nestjs/common";
import { PresentationModule } from "@nb/presentation/presentation.module";
import { PrismaModule } from "@nb/infrastructure/database/prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { zodValidate } from "@nb/infrastructure/configuration/zod-validate";
import { RedisModule } from "@nb/infrastructure/redis/redis.module";

@Module({
  imports: [
    { global: true, module: PrismaModule },
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: zodValidate,
    }),
    RedisModule,
    PresentationModule,
  ],
})
export class MainModule {
}
