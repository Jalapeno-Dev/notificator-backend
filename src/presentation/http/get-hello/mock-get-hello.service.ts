import { Injectable } from "@nestjs/common";
import { GetHelloFeatureInterface } from "@nb/domain/interfaces/features/get-hello/get-hello-feature.interface";

@Injectable()
export class MockGetHelloService implements GetHelloFeatureInterface {
  getHello() {
    return "Hello World!";
  }
}