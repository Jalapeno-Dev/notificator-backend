import { createZodDto } from "@anatine/zod-nestjs";
import { z } from "zod";

export class CreateBoardRequestDto extends createZodDto(z.object({
  name: z.string().min(1).max(255),
})) {
}