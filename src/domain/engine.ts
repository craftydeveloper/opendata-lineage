export interface LineageNode { id: string; upstreamIds: string[] }
export function topologicalLineage(nodes: readonly LineageNode[]): string[] {
  const byId=new Map(nodes.map(node=>[node.id,node])); const state=new Map<string,number>(); const order:string[]=[];
  const visit=(id:string):void=>{const current=state.get(id)??0;if(current===1)throw new Error("lineage cycle at " + id);if(current===2)return;const node=byId.get(id);if(!node)throw new Error("missing lineage node " + id);state.set(id,1);for(const upstream of [...node.upstreamIds].sort()){if(!byId.has(upstream))throw new Error("missing upstream node " + upstream);visit(upstream);}state.set(id,2);order.push(id);};
  for(const id of [...byId.keys()].sort())visit(id);return order;
}
export interface SchemaChange { field: string; change: "added"|"removed"|"type_changed"; before?: string; after?: string }
export function compareSchemas(before: Record<string,string>, after: Record<string,string>): SchemaChange[] {
  const fields=[...new Set([...Object.keys(before),...Object.keys(after)])].sort();const changes:SchemaChange[]=[];
  for(const field of fields){const left=before[field];const right=after[field];if(left===undefined&&right!==undefined)changes.push({field,change:"added",after:right});else if(left!==undefined&&right===undefined)changes.push({field,change:"removed",before:left});else if(left!==undefined&&right!==undefined&&left!==right)changes.push({field,change:"type_changed",before:left,after:right});}return changes;
}