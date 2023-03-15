import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const UserAnswerResulCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="用户ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="答题结论" source="answerResult" />
        <TextInput label="最后修改用户ID" source="lastUpdateUserId" />
      </SimpleForm>
    </Create>
  );
};
