import { Test, TestingModule } from "@nestjs/testing";
import { GreetingsGetHelloController } from "@nb/presentation/http/greetings/get-hello/greetings-get-hello.controller";
import {
  MockGreetingsGetHelloService,
} from "@nb/presentation/http/greetings/get-hello/mock-greetings-get-hello.service";


describe("AppController", () => {
  let appController: GreetingsGetHelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreetingsGetHelloController],
      providers: [{ provide: "GetHelloServiceImpl", useClass: MockGreetingsGetHelloService }],
    }).compile();

    appController = app.get<GreetingsGetHelloController>(GreetingsGetHelloController);
  });

  describe("root", () => {
    it(`should return "Hello World!"`, async () => {
      expect(await appController.getHello()).toBe("Hello World!");
    });
  });
});
