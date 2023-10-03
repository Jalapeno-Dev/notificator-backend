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

      if (!payload.id) {
        return false;
      }

      request.user = payload;
      return true;
    } catch (e) {
      return false;
    }
  }
}