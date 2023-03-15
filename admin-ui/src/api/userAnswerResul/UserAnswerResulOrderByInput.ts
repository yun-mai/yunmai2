import { SortOrder } from "../../util/SortOrder";

export type UserAnswerResulOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
  answerResult?: SortOrder;
  lastUpdateUserId?: SortOrder;
};
