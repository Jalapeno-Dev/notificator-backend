import { JwtService } from "@nestjs/jwt";
import { ISignTokenService, SIGN_TOKEN_SERVICE } from "@nb/application/crypto/interfaces/sign-token.service";
import { Injectable } from "@nestjs/common";

@Injectable()
class JwtSignTokenService implements ISignTokenService {
  constructor(private readonly jwtService: JwtService) {
  }

  async sign(payload: object | string): Promise<string> {
    if (typeof payload === "string") {
      return this.jwtService.signAsync(payload);
    }
    return this.jwtService.signAsync(payload);
  }
}

export const SignTokenServiceProvider = {
  provide: SIGN_TOKEN_SERVICE,
  useClass: JwtSignTokenService,
};