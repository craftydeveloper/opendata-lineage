export function normalizeKey(value: string): string { return value.normalize("NFKC").trim().toLocaleLowerCase().replace(/\s+/g,"-").replace(/[^\p{L}\p{N}-]/gu,"").replace(/-+/g,"-"); }
