import { UserAnswerResul as TUserAnswerResul } from "../api/userAnswerResul/UserAnswerResul";

export const USERANSWERRESUL_TITLE_FIELD = "answerResult";

export const UserAnswerResulTitle = (record: TUserAnswerResul): string => {
  return record.answerResult || String(record.id);
};
