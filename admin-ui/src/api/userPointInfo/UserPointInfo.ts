import { User } from "../user/User";

export type UserPointInfo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: User | null;
  pointLevelId: string | null;
  totalPoints: number | null;
  currentPoints: number | null;
  totalExpendPoint: number | null;
  pelletValue: number | null;
};
