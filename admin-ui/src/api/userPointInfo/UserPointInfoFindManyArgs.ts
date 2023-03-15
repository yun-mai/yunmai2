import { UserPointInfoWhereInput } from "./UserPointInfoWhereInput";
import { UserPointInfoOrderByInput } from "./UserPointInfoOrderByInput";

export type UserPointInfoFindManyArgs = {
  where?: UserPointInfoWhereInput;
  orderBy?: Array<UserPointInfoOrderByInput>;
  skip?: number;
  take?: number;
};
