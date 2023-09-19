import { Injectable } from "@nestjs/common";
import { GetHelloFeatureInterface } from "@nb/domain/interfaces/features/get-hello/get-hello-feature.interface";

@Injectable()
export class GetHelloService implements GetHelloFeatureInterface {
  getHello(): string {
    return "Hello World!";
  }
}
