import { Request, Response, NextFunction } from 'express';
import Middleware from './Middleware';
import HttpStatus from '../enums/HttpStatus';
import IErrorResponse from '../interfaces/IErrorResponse';

export default class AuthMiddleware extends Middleware {

  handle(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
      const errorMessage : IErrorResponse = { errorResponse: { errmsg: 'Unauthorized' }};
      return response.status(HttpStatus.UNAUTHORIZED).json(errorMessage)
    }
    
    next();
  }
}