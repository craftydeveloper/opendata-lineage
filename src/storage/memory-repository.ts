import { ConflictError } from "../errors.js";
import type { RecordRepository } from "./repository.js";
import type { RecordItem } from "../domain/types.js";
export class MemoryRecordRepository implements RecordRepository {
  private readonly records=new Map<string,RecordItem>();
  insert(record: RecordItem): RecordItem { if(this.records.has(record.id)) throw new ConflictError("record already exists"); const copy=structuredClone(record); this.records.set(record.id,copy); return structuredClone(copy); }
  get(id: string): RecordItem | undefined { const value=this.records.get(id); return value?structuredClone(value):undefined; }
  list(): RecordItem[] { return [...this.records.values()].map(value=>structuredClone(value)).sort((a,b)=>a.createdAt.localeCompare(b.createdAt)||a.id.localeCompare(b.id)); }
}
