import { SortOrder } from "../../util/SortOrder";

export type UserPointInfoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
  pointLevelId?: SortOrder;
  totalPoints?: SortOrder;
  currentPoints?: SortOrder;
  totalExpendPoint?: SortOrder;
  pelletValue?: SortOrder;
};
