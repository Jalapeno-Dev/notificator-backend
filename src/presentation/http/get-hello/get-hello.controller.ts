import { Controller, Get } from "@nestjs/common";
import { GetHelloService } from "@nb/application/features/get-hello/get-hello.service";

@Controller()
export class GetHelloController {
  constructor(private readonly getHelloService: GetHelloService) {}

  @Get()
  getHello(): string {
    return this.getHelloService.getHello();
  }
}
