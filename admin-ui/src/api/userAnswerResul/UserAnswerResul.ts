import { User } from "../user/User";

export type UserAnswerResul = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: User | null;
  answerResult: string | null;
  lastUpdateUserId: string | null;
};
