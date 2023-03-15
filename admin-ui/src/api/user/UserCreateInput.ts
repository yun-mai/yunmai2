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
};
