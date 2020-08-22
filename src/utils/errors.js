function NotFoundError(message) {
  this.name = 'NotFoundError';
  this.statusCode = 404;
  this.message = message || 'Recurso não encontrado';
  this.stack = new Error().stack;
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

function RequestError(message) {
  this.name = 'RequestError';
  this.statusCode = 400;
  this.message = message || 'Falha na requisição';
  this.stack = new Error().stack;
}

RequestError.prototype = Object.create(Error.prototype);
RequestError.prototype.constructor = RequestError;

function ForbiddenError(message) {
  this.name = 'ForbiddenError';
  this.statusCode = 403;
  this.message = message || 'Sem permissões para acessar o recurso';
  this.stack = new Error().stack;
}

ForbiddenError.prototype = Object.create(Error.prototype);
ForbiddenError.prototype.constructor = ForbiddenError;

function ValidationError(message) {
  this.name = 'ValidationError';
  this.statusCode = 422;
  this.message = message || 'Erro de validação';
  this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

function UnauthorizedError(message) {
  this.name = 'UnauthorizedError';
  this.statusCode = 401;
  this.message =
    message || 'Necessário autenticação para acessar o recurso';
  this.stack = new Error().stack;
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = {
  NotFoundError,
  RequestError,
  ForbiddenError,
  UnauthorizedError,
  ValidationError,
};
