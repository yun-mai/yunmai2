import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserAnswerResulWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
  answerResult?: StringNullableFilter;
  lastUpdateUserId?: StringNullableFilter;
};
