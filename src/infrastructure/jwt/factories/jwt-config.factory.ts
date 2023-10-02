import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt/dist/interfaces/jwt-module-options.interface";

export class JwtConfigFactory implements JwtOptionsFactory {
  createJwtOptions(): JwtModuleOptions {
    return {
      secret: "secretKey",
      signOptions: { expiresIn: "1d" },
    };
  }
}