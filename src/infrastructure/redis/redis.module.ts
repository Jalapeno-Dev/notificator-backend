import { Module } from "@nestjs/common";
import { RedisModule as NestRedisModule } from "nestjs-redis";
import { RedisConfigFactory } from "@nb/infrastructure/redis/factories/redis-config.factory";

@Module({
  imports: [
    NestRedisModule.forRootAsync(RedisConfigFactory),
  ],
})
class RedisModuleCls {
}

export const RedisModule = {
  global: true,
  module: RedisModuleCls,
};