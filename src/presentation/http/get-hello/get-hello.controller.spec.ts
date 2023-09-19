import { Test, TestingModule } from "@nestjs/testing";
import { GetHelloController } from "@nb/presentation/http/get-hello/get-hello.controller";
import { MockGetHelloService } from "@nb/presentation/http/get-hello/mock-get-hello.service";


describe("AppController", () => {
  let appController: GetHelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloController],
      providers: [{ provide: "GetHelloServiceImpl", useClass: MockGetHelloService }],
    }).compile();

    appController = app.get<GetHelloController>(GetHelloController);
  });

  describe("root", () => {
    it(`should return "Hello World!"`, async () => {
      expect(await appController.getHello()).toBe("Hello World!");
    });
  });
});
