import { ObjectId } from 'mongoose';

export type UserRole = 'admin' | 'sales';

export interface IUser {
  _id: string | ObjectId;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: UserRole;
  };
}
