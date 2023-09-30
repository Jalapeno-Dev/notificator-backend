import { Module } from "@nestjs/common";
import { RestModule } from "@nb/presentation/rest/rest.module";

@Module({
  imports: [RestModule],
})
export class PresentationModule {
}