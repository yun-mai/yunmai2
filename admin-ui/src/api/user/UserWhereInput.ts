import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserPointInfoListRelationFilter } from "../userPointInfo/UserPointInfoListRelationFilter";
import { UserAnswerResulListRelationFilter } from "../userAnswerResul/UserAnswerResulListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  userPointInfos?: UserPointInfoListRelationFilter;
  userAnswerResuls?: UserAnswerResulListRelationFilter;
};
