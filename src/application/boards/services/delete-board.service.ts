import { Inject, Injectable } from "@nestjs/common";
import { BOARD_REPOSITORY, IBoardRepository } from "@nb/application/boards/interfaces/boards.repository";

@Injectable()
export class DeleteBoardService {
  constructor(
    @Inject(BOARD_REPOSITORY)
    private readonly boardRepository: IBoardRepository,
  ) {
  }

  async execute(params: { boardId: string, userId: string }) {
    const board = await this.boardRepository.findById(params.boardId);

    if (!board) {
      throw new Error("Board not found");
    }

    if (board.ownerId !== params.userId) {
      throw new Error("You are not the owner of this board");
    }

    return this.boardRepository.deleteById(board.id);
  }
}