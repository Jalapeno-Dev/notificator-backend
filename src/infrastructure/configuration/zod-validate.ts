import { environmentSchema } from "@nb/infrastructure/configuration/configuration.types";

export function zodValidate(config: Record<string, unknown>) {
  const parsingResult = environmentSchema.safeParse(config);
  if (parsingResult.success) {
    return parsingResult.data;
  } else {
    throw new Error(`Config validation error: ${parsingResult.error.message}`);
  }
}