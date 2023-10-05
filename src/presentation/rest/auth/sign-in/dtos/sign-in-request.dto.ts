import { z } from "zod";
import { createZodDto } from "@anatine/zod-nestjs";

export class SignInRequestDto extends createZodDto(z.object({
  email: z.string().email(),
  password: z.string().min(8),
})) {
}