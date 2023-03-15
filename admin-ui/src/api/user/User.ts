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
  oauthType: string;
  openId: string;
  sessionKey: string;
  unionId: string;
  sessionId: string;
  phone: string | null;
  mobileType: string | null;
  nickName: string | null;
  avatarUrl: string | null;
  gender?: "Man" | "Woman" | "Unknown" | null;
  birthday: Date | null;
};
