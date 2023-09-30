import { Body, Controller, Post } from "@nestjs/common";
import { SignUpRequestDto } from "@nb/presentation/rest/auth/sign-up/dtos/sign-up-request.dto";
import { SignedTokenResponseDto } from "@nb/presentation/rest/auth/sign-up/dtos/signed-token-response.dto";
import { SignUpService } from "@nb/application/auth/services/sign-up.service";

@Controller("auth")
export class SignUpController {
  constructor(
    private readonly signUpService: SignUpService,
  ) {
  }

  @Post("sign-up")
  async signUp(
    @Body() dto: SignUpRequestDto,
  ): Promise<SignedTokenResponseDto> {
    return this.signUpService.signUp(dto);
  }
}