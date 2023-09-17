import { Module } from "@nestjs/common";
import { GetHelloModule } from "@nb/modules/greetings/get-hello.module";

@Module({
  imports: [GetHelloModule],
})
export class MainModule {}
