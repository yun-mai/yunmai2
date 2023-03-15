import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAnswerResulUpdateInput = {
  userId?: UserWhereUniqueInput | null;
  answerResult?: string | null;
  lastUpdateUserId?: string | null;
};
