import { ApiProperty } from "@nestjs/swagger";

export class CreateBoardRequestDto {
  @ApiProperty()
  name!: string;
}