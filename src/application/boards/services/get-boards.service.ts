import { Inject, Injectable } from "@nestjs/common";
import { BOARD_REPOSITORY, IBoardRepository } from "@nb/application/boards/interfaces/boards.repository";
import { BoardModel } from "@nb/application/boards/models/board.model";

@Injectable()
export class GetBoardsService {
  constructor(
    @Inject(BOARD_REPOSITORY)
    private readonly boardRepository: IBoardRepository,
  ) {
  }

  async execute(userId: string): Promise<BoardModel[]> {
    return this.boardRepository.findAvailableByUserId(userId);
  }
}
