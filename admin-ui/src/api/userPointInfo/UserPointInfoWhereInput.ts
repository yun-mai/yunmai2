import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type UserPointInfoWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
  pointLevelId?: StringNullableFilter;
  totalPoints?: FloatNullableFilter;
  currentPoints?: FloatNullableFilter;
  totalExpendPoint?: FloatNullableFilter;
  pelletValue?: FloatNullableFilter;
};
