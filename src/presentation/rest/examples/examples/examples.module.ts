import { Module } from "@nestjs/common";
import { ExamplesController } from "@nb/presentation/rest/examples/examples/examples.controller";

@Module({
  controllers: [ExamplesController],
})
export class ExamplesModule {
}