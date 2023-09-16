import { Module } from "@nestjs/common";
import { GetHelloController } from "@nb/presentation/http/get-hello/get-hello.controller";
import { GetHelloService } from "@nb/application/features/get-hello/get-hello.service";

@Module({
  imports: [],
  controllers: [GetHelloController],
  providers: [GetHelloService],
})
export class MainModule {}
