import { Module } from "@nestjs/common";
import { RedisService } from "@nb/infrastructure/redis/services/redis.service";

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {
}