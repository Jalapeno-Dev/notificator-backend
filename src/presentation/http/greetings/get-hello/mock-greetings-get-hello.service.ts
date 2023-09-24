import { Injectable } from "@nestjs/common";
import {
  GreetingsGetHelloFeatureInterface,
} from "@nb/domain/interfaces/features/greetings/greetings-get-hello/greetings-get-hello-feature.interface";

@Injectable()
export class MockGreetingsGetHelloService implements GreetingsGetHelloFeatureInterface {
  greetingsGetHello() {
    return "Hello World!";
  }
}