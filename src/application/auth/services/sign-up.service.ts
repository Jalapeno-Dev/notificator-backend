import { HASH_PASSWORD_SERVICE, IHashPasswordService } from "@nb/application/crypto/interfaces/hash-password.service";
import { IUserRepository, USER_REPOSITORY } from "@nb/application/users/interfaces/user.repository";
import { ISignTokenService, SIGN_TOKEN_SERVICE } from "@nb/application/crypto/interfaces/sign-token.service";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class SignUpService {
  constructor(
    @Inject(HASH_PASSWORD_SERVICE)
    private readonly hashPasswordService: IHashPasswordService,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject(SIGN_TOKEN_SERVICE)
    private readonly signTokenService: ISignTokenService,
  ) {
  }

  async signUp(params: { email: string, password: string }): Promise<{ token: string }> {
    const sameEmail = await this.userRepository.countByEmail(params.email);

    if (sameEmail > 0) throw new Error("Email already exists");

    const passwordHash = await this.hashPasswordService.hash(params.password);

    const user = await this.userRepository.create({ email: params.email, passwordHash });

    const token = await this.signTokenService.sign({ id: user.id });

    return { token };
  }
}