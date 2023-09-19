import { Module } from "@nestjs/common";
import { GetHelloService } from "@nb/application/features/get-hello/get-hello.service";
import { GetHelloController } from "@nb/presentation/http/get-hello/get-hello.controller";

@Module({
  controllers: [GetHelloController],
  providers: [{ provide: "GetHelloServiceImpl", useClass: GetHelloService }],
})
export class GetHelloModule {
}
