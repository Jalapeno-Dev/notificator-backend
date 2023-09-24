import { Controller, Get, Inject } from "@nestjs/common";
import { GreetingsGetHelloFeatureInterface } from "@nb/domain/interfaces/features/greetings/greetings-get-hello/greetings-get-hello-feature.interface";

@Controller()
export class GreetingsGetHelloController {
  constructor(
    @Inject("GetHelloServiceImpl")
    private readonly getHelloService: GreetingsGetHelloFeatureInterface) {
  }

  @Get()
  async getHello(): Promise<string> {
    return this.getHelloService.greetingsGetHello();
  }
}
