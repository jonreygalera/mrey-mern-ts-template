import { Response } from 'express';
import HttpStatus from '../enums/HttpStatus';

export default class HttpJsonResponse {

  // Successful Responses
  static success(res: Response, statusCode: HttpStatus = HttpStatus.OK, data: any = {}) : void {
    res.status(statusCode).json(data);
  }

  static ok(res: Response, data: any = {}) : void {
    HttpJsonResponse.success(res, HttpStatus.OK, data);
  }

  static created(res: Response, data: any = {}) : void {
    HttpJsonResponse.success(res, HttpStatus.CREATED, data);
  }

  static noContent(res: Response) : void {
    res.status(HttpStatus.NO_CONTENT).send();
  }

  // Error Responses
  static error(res: Response, statusCode: HttpStatus, message: string = '', errors: any = {}) : void {
    if(errors instanceof Error) {
      errors = { message: errors.message }
    }

    res.status(statusCode).json({
      message,
      errors,
    });
  }

  static badRequest(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.BAD_REQUEST, 'Bad Request', errors);
  }

  static unauthorized(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.UNAUTHORIZED, 'Unauthorized', errors);
  }

  static forbidden(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.FORBIDDEN, 'Forbidden', errors);
  }

  static notFound(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.NOT_FOUND, 'Not Found', errors);
  }

  static internalServerError(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error', errors);
  }

  // Additional Common Error Responses
  static conflict(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.CONFLICT, 'Conflict', errors);
  }

  static unprocessableEntity(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.UNPROCESSABLE_ENTITY, 'Unprocessable Entity', errors);
  }

  static tooManyRequests(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.TOO_MANY_REQUESTS, 'Too Many Requests', errors);
  }

  static serviceUnavailable(res: Response, errors: any = {}) : void {
    HttpJsonResponse.error(res, HttpStatus.SERVICE_UNAVAILABLE, 'Service Unavailable', errors);
  }
}
