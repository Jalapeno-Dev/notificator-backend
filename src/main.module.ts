import { Module } from "@nestjs/common";
import { PresentationModule } from "@nb/presentation/presentation.module";
import { PrismaModule } from "@nb/infrastructure/database/prisma/prisma.module";

@Module({
  imports: [
    { global: true, module: PrismaModule }, PresentationModule],
})
export class MainModule {
}
