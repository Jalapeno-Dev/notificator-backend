import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@nb/infrastructure/jwt/guards/jwt-auth.guard";

@ApiTags("examples")
@Controller("examples")
export class ExamplesController {

  @ApiOperation({ summary: "Get public" })
  @Get("public")
  async getPublic(): Promise<string> {
    return "I am public!";
  }

  @ApiOperation({ summary: "Get protected" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get("protected")
  async getProtected(): Promise<string> {
    return "I am protected!";
  }
}