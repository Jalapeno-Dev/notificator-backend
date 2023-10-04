import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthorizedRequest } from "@nb/infrastructure/fastify/interfaces/authorized-request";

export const IAM = createParamDecorator<keyof { id: string }>((property, ctx: ExecutionContext) => {
  const { user } = ctx.switchToHttp().getRequest<AuthorizedRequest>();

  if (property) {
    return user[property];
  }

  return user;
});