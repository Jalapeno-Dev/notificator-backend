import { UserModel } from "@nb/application/users/models/user.model";

export const BOARD_MEMBERS_REPOSITORY = Symbol.for("BOARD_MEMBERS_REPOSITORY");

export interface IBoardMembersRepository {
  exists(params: { boardId: string, userId: string }): Promise<boolean>;

  findByBoardId(boardId: string): Promise<UserModel[]>;
}