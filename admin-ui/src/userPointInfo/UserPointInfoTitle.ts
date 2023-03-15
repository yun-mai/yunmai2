import { UserPointInfo as TUserPointInfo } from "../api/userPointInfo/UserPointInfo";

export const USERPOINTINFO_TITLE_FIELD = "id";

export const UserPointInfoTitle = (record: TUserPointInfo): string => {
  return record.id || String(record.id);
};
