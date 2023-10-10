import { ConfigService } from "@nestjs/config";
import { RedisModuleOptions } from "nestjs-redis/dist/redis.interface";
import { EnvironmentSchema } from "@nb/infrastructure/configuration/configuration.types";

export const RedisConfigFactory = {
  useFactory: (configService: ConfigService<EnvironmentSchema>): RedisModuleOptions => ({
    url: configService.getOrThrow<string>("REDIS_URL", { infer: true }),
  }),
  inject: [ConfigService],
};