import { ConfigService } from "@nestjs/config";
import { EnvironmentSchema } from "@nb/infrastructure/configuration/configuration.types";
import Redis from "ioredis";
import { Injectable, Logger, OnModuleInit } from "@nestjs/common";

@Injectable()
export class RedisService extends Redis implements OnModuleInit {
  constructor(
    private readonly configService: ConfigService<EnvironmentSchema>,
  ) {
    const redisUrl = configService.get("REDIS_URL");
    super(redisUrl);
  }

  async onModuleInit() {
    try {
      Logger.log("Check Redis connection...", "RedisModule");
      const result = await this.ping();
      if (result) {
        Logger.log("Redis connection: OK", "RedisModule");
      }
    } catch (err) {
      Logger.error("Can not connect to Redis", "RedisModule");
      Logger.error(err, "RedisModule");
      throw err;
    }
  }
}