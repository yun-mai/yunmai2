import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPointInfoUpdateInput = {
  userId?: UserWhereUniqueInput | null;
  pointLevelId?: string | null;
  totalPoints?: number | null;
  currentPoints?: number | null;
  totalExpendPoint?: number | null;
  pelletValue?: number | null;
};
