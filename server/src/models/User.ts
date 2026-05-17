import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../types/user';

export interface IUserDocument extends IUser, Document {
  _id: any;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'sales'], default: 'sales' },
  },
  { timestamps: true }
);

export default mongoose.model<IUserDocument>('User', UserSchema);
