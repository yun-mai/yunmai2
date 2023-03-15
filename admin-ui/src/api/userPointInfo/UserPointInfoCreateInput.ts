import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPointInfoCreateInput = {
  userId?: UserWhereUniqueInput | null;
  pointLevelId?: string | null;
  totalPoints?: number | null;
  currentPoints?: number | null;
  totalExpendPoint?: number | null;
  pelletValue?: number | null;
};
