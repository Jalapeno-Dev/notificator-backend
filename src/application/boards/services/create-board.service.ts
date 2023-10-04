import { BOARD_REPOSITORY, IBoardRepository } from "@nb/application/boards/interfaces/boards.repository";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CreateBoardService {
  constructor(
    @Inject(BOARD_REPOSITORY)
    private readonly boardRepository: IBoardRepository,
  ) {
  }

  async execute(params: { name: string, userId: string }) {
    return this.boardRepository.create({
      name: params.name,
      ownerId: params.userId,
    });
  }
}