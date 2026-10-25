import { loadConfig } from "./config.js";
import { createAppServer } from "./http/server.js";
const config=loadConfig();const server=createAppServer();server.listen(config.port,config.host,()=>{process.stdout.write("service listening on "+config.host+":"+config.port+"\n");});
const shutdown=():void=>{server.close(error=>{if(error){process.stderr.write(error.message+"\n");process.exitCode=1;}});};process.once("SIGINT",shutdown);process.once("SIGTERM",shutdown);
