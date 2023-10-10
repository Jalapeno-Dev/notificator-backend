import { Inject, Injectable } from "@nestjs/common";
import { BOARD_REPOSITORY, IBoardRepository } from "@nb/application/boards/interfaces/boards.repository";
import {
  BOARD_MEMBERS_REPOSITORY,
  IBoardMembersRepository,
} from "@nb/application/boards/interfaces/board-members.repository";
import { GetBoardMembersResult } from "@nb/application/boards/services/get-board-members/get-board-members.types";

@Injectable()
export class GetBoardMembersService {
  constructor(
    @Inject(BOARD_REPOSITORY)
    private readonly boardRepository: IBoardRepository,
    @Inject(BOARD_MEMBERS_REPOSITORY)
    private readonly boardMembersRepository: IBoardMembersRepository,
  ) {
  }

  async execute(params: { boardId: string, userId: string }): Promise<GetBoardMembersResult> {
    const isMember = await this.boardMembersRepository.exists({
      boardId: params.boardId,
      userId: params.userId,
    });

    if (!isMember) {
      throw new Error("User is not a member of the board");
    }

    const board = await this.boardRepository.findById(params.boardId);

    if (!board) {
      throw new Error("Board not found");
    }

    const members = await this.boardMembersRepository.findByBoardId(params.boardId);

    return {
      members,
      ownerId: board.ownerId,
    };
  }
}