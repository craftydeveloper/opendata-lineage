import { describe, expect, it } from "vitest";
import { ConflictError, ValidationError } from "../src/errors.js";
import { RecordService } from "../src/domain/service.js";
import { MemoryRecordRepository } from "../src/storage/memory-repository.js";
describe("record service",()=>{it("validates, stores, and returns detached records",()=>{const service=new RecordService(new MemoryRecordRepository(),()=>"2026-01-01T00:00:00Z");const item=service.create({id:"r1",title:"Sample",kind:"artifact"});item.tags.push("mutated");expect(service.get("r1")?.tags).toEqual([]);expect(service.list()).toHaveLength(1);});it("rejects duplicate identifiers and invalid input",()=>{const service=new RecordService(new MemoryRecordRepository());service.create({id:"r1",title:"Sample",kind:"artifact"});expect(()=>service.create({id:"r1",title:"Again",kind:"artifact"})).toThrow(ConflictError);expect(()=>service.create({id:"",title:"x",kind:"artifact"})).toThrow(ValidationError);});});
