import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserPointInfoListRelationFilter } from "../userPointInfo/UserPointInfoListRelationFilter";
import { UserAnswerResulListRelationFilter } from "../userAnswerResul/UserAnswerResulListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  userPointInfos?: UserPointInfoListRelationFilter;
  userAnswerResuls?: UserAnswerResulListRelationFilter;
  oauthType?: StringFilter;
  openId?: StringFilter;
  sessionKey?: StringFilter;
  unionId?: StringFilter;
  sessionId?: StringFilter;
  phone?: StringNullableFilter;
  mobileType?: StringNullableFilter;
  nickName?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  gender?: "Man" | "Woman" | "Unknown";
  birthday?: DateTimeNullableFilter;
};
