import UserDto from "../dto/UserDto";
import IUser from "../models/user/IUser";
import UserRepository from "../repositories/UserRepository";

export default class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }

  async find(id: string): Promise<IUser|null> {
    return this.userRepository.find(id);
  }

  async create(user: UserDto): Promise<IUser|null> {
    return this.userRepository.create(user);
  }

  async update(id: string, user: UserDto): Promise<IUser|null> {
    return this.userRepository.update(id, user);
  }
}