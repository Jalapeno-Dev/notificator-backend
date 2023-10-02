import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository, USER_REPOSITORY } from "@nb/application/users/interfaces/user.repository";
import {
  IVerifyPasswordService,
  VERIFY_PASSWORD_SERVICE,
} from "@nb/application/crypto/interfaces/verify-password.service";
import { ISignTokenService, SIGN_TOKEN_SERVICE } from "@nb/application/crypto/interfaces/sign-token.service";

@Injectable()
export class SignInService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject(SIGN_TOKEN_SERVICE)
    private readonly signTokenService: ISignTokenService,
    @Inject(VERIFY_PASSWORD_SERVICE)
    private readonly verifyPasswordService: IVerifyPasswordService,
  ) {
  }

  async signIn(params: { email: string, password: string }): Promise<{ token: string }> {
    const user = await this.userRepository.findByEmail(params.email);

    if (!user) throw new Error("Invalid email or password");

    const validPassword = await this.verifyPasswordService.verify({
      password: params.password,
      passwordHash: user.passwordHash,
    });

    if (!validPassword) throw new Error("Invalid email or password");

    const token = await this.signTokenService.sign({ id: user.id });

    return { token };
  }
}