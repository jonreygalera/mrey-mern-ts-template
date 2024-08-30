import HttpStatus from "../enums/HttpStatus";

export default class UserException extends Error {
  public statusCode: number;

  constructor(message: string = 'User not found', statusCode: number = HttpStatus.NOT_FOUND) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}