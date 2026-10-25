import { createServer } from "node:http";
import { RecordService } from "../domain/service.js";
import { MemoryRecordRepository } from "../storage/memory-repository.js";
import { handleRequest } from "./routes.js";
export function createAppServer(service=new RecordService(new MemoryRecordRepository())){return createServer((req,res)=>{void handleRequest(req,res,service);});}
