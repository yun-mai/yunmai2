import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const UserPointInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="用户ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="积分等级ID" source="pointLevelId" />
        <NumberInput label="总积分" source="totalPoints" />
        <NumberInput label="当前积分" source="currentPoints" />
        <NumberInput label="积分总消费" source="totalExpendPoint" />
        <NumberInput label="丹药值" source="pelletValue" />
      </SimpleForm>
    </Create>
  );
};
