import { ApiProperty } from "@nestjs/swagger";

export class SignedTokenResponseDto {
  @ApiProperty({ type: String })
  token!: string;
}