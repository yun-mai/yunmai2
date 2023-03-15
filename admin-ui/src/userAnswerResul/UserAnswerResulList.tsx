import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserAnswerResulList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserAnswerResuls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="答题提交时间" />
        <DateField source="updatedAt" label="最后修改时间" />
        <ReferenceField label="用户ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="答题结论" source="answerResult" />
        <TextField label="最后修改用户ID" source="lastUpdateUserId" />
      </Datagrid>
    </List>
  );
};
