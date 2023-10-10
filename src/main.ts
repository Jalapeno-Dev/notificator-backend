import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { patchNestjsSwagger, ZodValidationPipe } from "@anatine/zod-nestjs";
import { ConfigService } from "@nestjs/config";
import { EnvironmentSchema } from "@nb/infrastructure/configuration/configuration.types";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());

  const configService: ConfigService<EnvironmentSchema> = app.get<ConfigService<EnvironmentSchema>>(ConfigService);

  const host = configService.getOrThrow("HOST", { infer: true });
  const port = configService.getOrThrow("PORT", { infer: true });

  const config = new DocumentBuilder()
    .setTitle("Notification Boss API")
    .setDescription("The Notification Boss API description")
    .setVersion("0.0.1")
    .addServer(`http://${host}:${port}`)
    .addBearerAuth()
    .build();

  app.useGlobalPipes(new ZodValidationPipe());

  patchNestjsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  const logger: Logger = new Logger("NestApplication");

  await app.listen(port, host, (err, address) => {
    if (err) {
      logger.error(err);
      process.exit(1);
    }
    logger.log(`Listening on ${address}`);
  });
}

void bootstrap();
