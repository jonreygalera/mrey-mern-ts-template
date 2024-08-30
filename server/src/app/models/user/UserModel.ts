import mongoose, { Schema, Model } from 'mongoose';
import IUser from './IUser';

const UserSchema: Schema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  personalEmail: { type: String, required: true, unique: true }
});

const UserModel: Model<IUser> = mongoose.model<IUser>('Users', UserSchema);

export default UserModel;