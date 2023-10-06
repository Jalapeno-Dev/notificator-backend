import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { patchNestjsSwagger, ZodValidationPipe } from "@anatine/zod-nestjs";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());

  const config = new DocumentBuilder()
    .setTitle("Notification Boss API")
    .setDescription("The Notification Boss API description")
    .setVersion("0.0.1")
    .addServer("http://localhost:3000")
    .addBearerAuth()
    .build();

  app.useGlobalPipes(new ZodValidationPipe());

  patchNestjsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}

void bootstrap();
