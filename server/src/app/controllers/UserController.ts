import { Request, Response } from 'express';
import UserService from '../services/UserService';
import UserModel from '../models/user/UserModel';
import UserRepository from '../repositories/UserRepository';
import IUser from '../models/user/IUser';
import UserDto from '../dto/UserDto';
import UserException from '../exceptions/UserException';
import HttpJsonReponse from '../facades/HttpJsonResponse';
import HttpStatusMessage from '../enums/HttpStatusMessage';

class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      HttpJsonReponse.ok(res, users);
    } catch (error) {
      HttpJsonReponse.internalServerError(res, error);
    }
  }

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.find(req.params.id);
      if(user) {
        HttpJsonReponse.ok(res, user);
      } else {
        HttpJsonReponse.noContent(res);
      }
    } catch (error) {
      if(error instanceof UserException) {
        res.status(error.statusCode).json({message: error.message});
      } else {
        HttpJsonReponse.internalServerError(res, error);
      }
    }
  }

  async createUser(req: Request<{}, {}, IUser>, res: Response): Promise<void> {
    const reqBody = req.body;
    try {
      const user = await this.userService.create(new UserDto(reqBody.firstName, reqBody.lastName, reqBody.personalEmail));
      HttpJsonReponse.created(res, user);
    } catch (error) {
      HttpJsonReponse.badRequest(res, error);
    }
  }

  async updateUser(req: Request<{ id: string }, {}, IUser>, res: Response): Promise<void> {
    const reqBody = req.body;
    try {
      const user = await this.userService.update(req.params.id, new UserDto(reqBody.firstName, reqBody.lastName, reqBody.personalEmail));
      HttpJsonReponse.ok(res, user);
    } catch (error) {
      if(error instanceof UserException) {
        HttpJsonReponse.error(res, error.statusCode, HttpStatusMessage[error.statusCode], error);
      } else {
        HttpJsonReponse.internalServerError(res, error);
      }
    }
  }
}

const userRepository = new UserRepository(UserModel);
const userService = new UserService(userRepository);

export default new UserController(userService);