import { Controller, Get, Inject } from "@nestjs/common";
import { GetHelloFeatureInterface } from "@nb/domain/interfaces/features/get-hello/get-hello-feature.interface";

@Controller()
export class GetHelloController {
  constructor(
    @Inject("GetHelloServiceImpl")
    private readonly getHelloService: GetHelloFeatureInterface) {
  }

  @Get()
  async getHello(): Promise<string> {
    return this.getHelloService.getHello();
  }
}
