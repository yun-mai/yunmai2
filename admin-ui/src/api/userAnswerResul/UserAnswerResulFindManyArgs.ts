import { UserAnswerResulWhereInput } from "./UserAnswerResulWhereInput";
import { UserAnswerResulOrderByInput } from "./UserAnswerResulOrderByInput";

export type UserAnswerResulFindManyArgs = {
  where?: UserAnswerResulWhereInput;
  orderBy?: Array<UserAnswerResulOrderByInput>;
  skip?: number;
  take?: number;
};
