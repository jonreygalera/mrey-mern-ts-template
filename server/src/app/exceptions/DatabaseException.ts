export default class DatabaseException extends Error {
  public statusCode: number;

  constructor(message: string = 'Cannot connect to the database', statusCode: number = 404) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}