export interface AppConfig { host: string; port: number }
export function loadConfig(env: Record<string,string|undefined> = process.env): AppConfig {
  const port = Number(env.PORT ?? "3000");
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new RangeError("PORT must be an integer from 1 to 65535");
  return { host: env.HOST ?? "127.0.0.1", port };
}
