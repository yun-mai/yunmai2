import { UserPointInfo as TUserPointInfo } from "../api/userPointInfo/UserPointInfo";

export const USERPOINTINFO_TITLE_FIELD = "pointLevelId";

export const UserPointInfoTitle = (record: TUserPointInfo): string => {
  return record.pointLevelId || String(record.id);
};
