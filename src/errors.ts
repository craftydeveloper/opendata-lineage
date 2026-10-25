export class DomainError extends Error {
  constructor(message: string, readonly code: string, readonly statusCode = 400) { super(message); this.name = new.target.name; }
}
export class ValidationError extends DomainError { constructor(message: string) { super(message, "VALIDATION_ERROR", 400); } }
export class ConflictError extends DomainError { constructor(message: string) { super(message, "CONFLICT", 409); } }
