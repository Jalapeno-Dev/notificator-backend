import { ApiProperty } from "@nestjs/swagger";
import { UserResponseDto } from "@nb/presentation/rest/users/dtos/user-response.dto";
import { UserModel } from "@nb/application/users/models/user.model";

export class BoardMembersResponseItemDto extends UserResponseDto {
  @ApiProperty({ enum: ["owner", "member"], enumName: "BoardMemberRoleKind" })
  role!: "owner" | "member";
}

export class BoardMembersResponseDto {
  constructor(
    members: UserModel[],
    ownerId: string,
  ) {
    this.members = members.map(member => {
      const role = member.id === ownerId ? "owner" : "member";

      return {
        ...member,
        role,
      };
    });
  }

  @ApiProperty({ type: [BoardMembersResponseItemDto] })
  members!: BoardMembersResponseItemDto[];
}