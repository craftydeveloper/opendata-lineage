import { ConflictError } from "../errors.js";
import type { RecordRepository } from "../storage/repository.js";
import { parseRecordInput } from "./validation.js";
import type { RecordItem } from "./types.js";
export class RecordService {
  constructor(private readonly repository: RecordRepository, private readonly now: () => string = () => new Date().toISOString()) {}
  create(input: unknown): RecordItem { const parsed=parseRecordInput(input); if(this.repository.get(parsed.id)) throw new ConflictError("record already exists"); const time=this.now(); return this.repository.insert({...parsed,tags:parsed.tags??[],body:parsed.body??"",createdAt:time,updatedAt:time}); }
  get(id: string): RecordItem | undefined { return this.repository.get(id); }
  list(): RecordItem[] { return this.repository.list(); }
}
