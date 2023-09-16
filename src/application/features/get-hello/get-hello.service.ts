import { Injectable } from "@nestjs/common";

@Injectable()
export class GetHelloService {
  getHello(): string {
    return "Hello World!";
  }
}
