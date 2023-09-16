import { Test, TestingModule } from "@nestjs/testing";
import { GetHelloController } from "@nb/presentation/http/get-hello/get-hello.controller";
import { GetHelloService } from "@nb/application/features/get-hello/get-hello.service";

describe("AppController", () => {
  let appController: GetHelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloController],
      providers: [GetHelloService],
    }).compile();

    appController = app.get<GetHelloController>(GetHelloController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
