export interface NewRecord { id: string; title: string; kind: string; tags?: string[]; body?: string }
export interface RecordItem { id: string; title: string; kind: string; tags: string[]; body: string; createdAt: string; updatedAt: string }
