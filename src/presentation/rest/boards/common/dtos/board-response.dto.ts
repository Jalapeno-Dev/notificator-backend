import { ApiProperty } from "@nestjs/swagger";

export class BoardResponseDto {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  ownerId!: string;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty({type: 'string', format: 'date-time', nullable: true })
  deletedAt!: Date | null;
}