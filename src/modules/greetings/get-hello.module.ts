import { Module } from "@nestjs/common";
import { GreetingsGetHelloService } from "@nb/application/features/get-hello/greetings-get-hello.service";
import { GreetingsGetHelloController } from "@nb/presentation/http/greetings/get-hello/greetings-get-hello.controller";

@Module({
  controllers: [GreetingsGetHelloController],
  providers: [{ provide: "GetHelloServiceImpl", useClass: GreetingsGetHelloService }],
})
export class GetHelloModule {
}
