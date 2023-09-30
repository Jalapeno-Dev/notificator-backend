import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());
  await app.listen(3000);
}

void bootstrap();
