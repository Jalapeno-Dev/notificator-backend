import { ApiProperty } from "@nestjs/swagger";

export class SignedTokenResponseDto {
  @ApiProperty()
  token!: string;
}