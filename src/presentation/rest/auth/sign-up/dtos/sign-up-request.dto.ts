import { createZodDto } from "@anatine/zod-nestjs";
import { z } from "zod";

export class SignUpRequestDto extends createZodDto(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
) {}