export const BOARD_MEMBERS_REPOSITORY = Symbol.for("BOARD_MEMBERS_REPOSITORY");

export interface IBoardMembersRepository {
  exists(params: { boardId: string, userId: string }): Promise<boolean>;
}