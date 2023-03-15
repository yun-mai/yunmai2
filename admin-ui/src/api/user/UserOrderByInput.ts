import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  oauthType?: SortOrder;
  openId?: SortOrder;
  sessionKey?: SortOrder;
  unionId?: SortOrder;
  sessionId?: SortOrder;
  phone?: SortOrder;
  mobileType?: SortOrder;
  nickName?: SortOrder;
  avatarUrl?: SortOrder;
  gender?: SortOrder;
  birthday?: SortOrder;
};
