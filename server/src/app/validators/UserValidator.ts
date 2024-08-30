import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import HttpStatus from '../enums/HttpStatus';

const userSchema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  personalEmail: Joi.string().email().max(50).required(),
});


export default class UserValidator {
  static validate(request: Request, response: Response, next: NextFunction) {
    const { error } = userSchema.validate(request.body);
    if (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error.details[0]);
    }
    next();
  }
}