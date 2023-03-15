import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAnswerResulCreateInput = {
  userId?: UserWhereUniqueInput | null;
  answerResult?: string | null;
  lastUpdateUserId?: string | null;
};
