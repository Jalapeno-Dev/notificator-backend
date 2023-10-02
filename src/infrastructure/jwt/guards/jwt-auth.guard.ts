import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IUserRepository, USER_REPOSITORY } from "@nb/application/users/interfaces/user.repository";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(" ")[1];

    if (!token) {
      return false;
    }

    try {
      const payload: { id: string } = await this.jwtService.verifyAsync(token);
      const user = await this.usersRepository.findById(payload.id);

      if (!user) {
        return false;
      }

      request.user = user;
      return true;
    } catch (e) {
      return false;
    }
  }
}