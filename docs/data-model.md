# Data model

The starter API uses a small record envelope (`id`, `title`, `kind`, `tags`, `body`, and timestamps) so the transport and repository can be exercised without coupling them to the project's core algorithm. The project-specific domain types live in `src/domain/engine.ts`.

Records are process-local and disappear when the server stops. Do not place personal, confidential, or regulated data in the example store.
