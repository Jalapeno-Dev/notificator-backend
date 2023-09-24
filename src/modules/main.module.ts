import { Module } from "@nestjs/common";
import { GetHelloModule } from "@nb/modules/greetings/get-hello.module";
import { PrismaModule } from "@nb/infrastructure/database/prisma/prisma.module";

@Module({
  imports: [
    GetHelloModule,
    {
      module: PrismaModule,
      global: true,
    }],
})
export class MainModule {
}
