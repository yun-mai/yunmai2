import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAnswerResulWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
