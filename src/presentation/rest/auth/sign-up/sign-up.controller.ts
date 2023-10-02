import { Body, Controller, Post } from "@nestjs/common";
import { SignUpRequestDto } from "@nb/presentation/rest/auth/sign-up/dtos/sign-up-request.dto";
import { SignedTokenResponseDto } from "@nb/presentation/rest/auth/common/dtos/signed-token-response.dto";
import { SignUpService } from "@nb/application/auth/services/sign-up.service";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class SignUpController {
  constructor(
    private readonly signUpService: SignUpService,
  ) {
  }

  @ApiOperation({ summary: "Sign up" })
  @ApiCreatedResponse({ type: SignedTokenResponseDto })
  @Post("sign-up")
  async signUp(
    @Body() dto: SignUpRequestDto,
  ): Promise<SignedTokenResponseDto> {
    return this.signUpService.signUp(dto);
  }
}