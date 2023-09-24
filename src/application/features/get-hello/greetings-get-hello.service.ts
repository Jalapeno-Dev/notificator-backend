import { Injectable } from "@nestjs/common";
import { GreetingsGetHelloFeatureInterface } from "@nb/domain/interfaces/features/greetings/greetings-get-hello/greetings-get-hello-feature.interface";

@Injectable()
export class GreetingsGetHelloService implements GreetingsGetHelloFeatureInterface {
  greetingsGetHello(): string {
    return "Hello World!";
  }
}
