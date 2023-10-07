import { z } from "zod";

export const environmentSchema = z.object({
  NODE_ENV: z.string(),
  HOST: z.string(),
  PORT: z.string().transform((val) => parseInt(val, 10)),
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.string().transform((val) => parseInt(val, 10)),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),
  POSTGRES_SCHEMA: z.string(),
}).required();

export type EnvironmentSchema = z.infer<typeof environmentSchema>;