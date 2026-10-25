import { describe, expect, it } from "vitest";
import { compareSchemas, topologicalLineage } from "../src/domain/engine.js";
describe("data lineage", () => {
  it("produces an upstream-first order", () => { expect(topologicalLineage([{id:"metric",upstreamIds:["table"]},{id:"table",upstreamIds:["source"]},{id:"source",upstreamIds:[]}])).toEqual(["source","table","metric"]); });
  it("detects schema additions, removals, and type changes", () => { expect(compareSchemas({a:"string",b:"number"},{a:"number",c:"boolean"})).toHaveLength(3); });
});