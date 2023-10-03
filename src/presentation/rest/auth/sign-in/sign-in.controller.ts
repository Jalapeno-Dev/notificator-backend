import { SignInService } from "@nb/application/auth/services/sign-in.service";
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { SignInRequestDto } from "@nb/presentation/rest/auth/sign-in/dtos/sign-in-request.dto";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { SignedTokenResponseDto } from "@nb/presentation/rest/auth/common/dtos/signed-token-response.dto";

@ApiTags("auth")
@Controller("auth")
export class SignInController {
  constructor(
    private readonly signInService: SignInService,
  ) {
  }

  @ApiOperation({ summary: "Sign in" })
  @ApiOkResponse({ type: SignedTokenResponseDto })
  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  async signIn(
    @Body() dto: SignInRequestDto,
  ): Promise<SignedTokenResponseDto> {
    return this.signInService.signIn(dto);
  }
}