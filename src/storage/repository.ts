import type { RecordItem } from "../domain/types.js";
export interface RecordRepository { insert(record: RecordItem): RecordItem; get(id: string): RecordItem | undefined; list(): RecordItem[] }
