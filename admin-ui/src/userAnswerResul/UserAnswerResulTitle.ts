import { UserAnswerResul as TUserAnswerResul } from "../api/userAnswerResul/UserAnswerResul";

export const USERANSWERRESUL_TITLE_FIELD = "id";

export const UserAnswerResulTitle = (record: TUserAnswerResul): string => {
  return record.id || String(record.id);
};
