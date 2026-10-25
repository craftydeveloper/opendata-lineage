# Operations

## Local checks

- `npm install` installs development tools.
- `npm run typecheck` runs strict TypeScript checks.
- `npm test` runs domain, service, and HTTP tests.
- `npm run dev` starts the local API.

## Runtime behavior

The server binds to loopback (`127.0.0.1`) by default and accepts JSON request bodies up to 64 KiB. Configure `HOST` and `PORT` through the process environment. Health check: `GET /healthz`. The in-memory store is not durable.

## Before deployment

Add authentication and authorization, persistent storage, TLS termination, structured logs, metrics, backups, and operational alerts. Review how project-specific data is collected and retained before accepting user data.
