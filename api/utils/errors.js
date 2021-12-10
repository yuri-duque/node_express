class GeneralError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status ?? 500;
  }
}

class BadRequest extends GeneralError {
  constructor(message) {
    super(message, 400);
  }
}

class NotFound extends GeneralError {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = {
  GeneralError,
  BadRequest,
  NotFound,
};
