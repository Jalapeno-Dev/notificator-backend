import { ApiProperty } from "@nestjs/swagger";

export class SignUpRequestDto {
  @ApiProperty()
  email!: string;
  @ApiProperty()
  password!: string;
}