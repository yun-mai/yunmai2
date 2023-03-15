import { JsonValue } from "type-fest";
import { UserPointInfo } from "../userPointInfo/UserPointInfo";
import { UserAnswerResul } from "../userAnswerResul/UserAnswerResul";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  userPointInfos?: Array<UserPointInfo>;
  userAnswerResuls?: Array<UserAnswerResul>;
};
