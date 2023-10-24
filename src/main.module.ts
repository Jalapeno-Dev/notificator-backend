import { Module } from "@nestjs/common";
import { PresentationModule } from "@nb/presentation/presentation.module";
import { PrismaModule } from "@nb/infrastructure/database/prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { zodValidate } from "@nb/infrastructure/configuration/zod-validate";

@Module({
  imports: [
    { global: true, module: PrismaModule },
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: zodValidate,
    }),
    PresentationModule,
  ],
})
export class MainModule {
}
