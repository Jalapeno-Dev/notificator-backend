import { customAlphabet } from "nanoid";

export function generateId(): string {
  return customAlphabet(
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    24,
  )();
}
