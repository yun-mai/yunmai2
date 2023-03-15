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
};
