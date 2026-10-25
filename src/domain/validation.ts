import { ValidationError } from "../errors.js";
import type { NewRecord } from "./types.js";
export function parseRecordInput(value: unknown): NewRecord {
  if (typeof value !== "object" || value === null || Array.isArray(value)) throw new ValidationError("body must be an object");
  const input = value as Record<string, unknown>;
  for (const key of ["id","title","kind"] as const) if (typeof input[key] !== "string" || input[key].trim().length === 0) throw new ValidationError(key + " is required");
  if (String(input.id).length > 120 || String(input.title).length > 240 || String(input.kind).length > 80) throw new ValidationError("a field exceeds its maximum length");
  const tags = input.tags === undefined ? [] : input.tags;
  if (!Array.isArray(tags) || tags.some(tag => typeof tag !== "string" || tag.length > 80)) throw new ValidationError("tags must be an array of short strings");
  const body = input.body === undefined ? "" : input.body;
  if (typeof body !== "string" || body.length > 20000) throw new ValidationError("body must be a string up to 20000 characters");
  return { id: String(input.id).trim(), title: String(input.title).trim(), kind: String(input.kind).trim(), tags: [...tags] as string[], body };
}
