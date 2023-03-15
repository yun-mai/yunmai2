import { InputJsonValue } from "../../types";
import { UserPointInfoUpdateManyWithoutUsersInput } from "./UserPointInfoUpdateManyWithoutUsersInput";
import { UserAnswerResulUpdateManyWithoutUsersInput } from "./UserAnswerResulUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  userPointInfos?: UserPointInfoUpdateManyWithoutUsersInput;
  userAnswerResuls?: UserAnswerResulUpdateManyWithoutUsersInput;
  oauthType?: string;
  openId?: string;
  sessionKey?: string;
  unionId?: string;
  sessionId?: string;
  phone?: string | null;
  mobileType?: string | null;
  nickName?: string | null;
  avatarUrl?: string | null;
  gender?: "Man" | "Woman" | "Unknown" | null;
  birthday?: Date | null;
};
