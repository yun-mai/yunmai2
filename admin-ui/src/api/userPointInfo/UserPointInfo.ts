import { User } from "../user/User";

export type UserPointInfo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: User | null;
};
