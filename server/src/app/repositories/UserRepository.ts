import mongoose, { Document, Model } from "mongoose";
import IUser from "../models/user/IUser";
import UserDto from "../dto/UserDto";
import UserException from "../exceptions/UserException";

export default class UserRepository {
  private userModel : Model<IUser & Document>;

  constructor(userModel: Model<IUser & Document>) {
    this.userModel = userModel;
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find({}).exec();
  }

  async find(id: string): Promise<IUser|null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new UserException;
    }
    return this.userModel.findById(id).exec();
  }

  async create(user: UserDto): Promise<IUser|null> {
    return this.userModel.create(user);
  }

  async update(id: string, user: UserDto): Promise<IUser|null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new UserException;
    }
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string): Promise<IUser|null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new UserException;
    }
    return this.userModel.findByIdAndDelete(id);
  }
}