import { InputJsonValue } from "../../types";
import { UserPointInfoCreateNestedManyWithoutUsersInput } from "./UserPointInfoCreateNestedManyWithoutUsersInput";
import { UserAnswerResulCreateNestedManyWithoutUsersInput } from "./UserAnswerResulCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  userPointInfos?: UserPointInfoCreateNestedManyWithoutUsersInput;
  userAnswerResuls?: UserAnswerResulCreateNestedManyWithoutUsersInput;
  oauthType: string;
  openId: string;
  sessionKey: string;
  unionId: string;
  sessionId: string;
  phone?: string | null;
  mobileType?: string | null;
  nickName?: string | null;
  avatarUrl?: string | null;
  gender?: "Man" | "Woman" | "Unknown" | null;
  birthday?: Date | null;
};
