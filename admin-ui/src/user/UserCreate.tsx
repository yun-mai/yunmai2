import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { UserPointInfoTitle } from "../userPointInfo/UserPointInfoTitle";
import { UserAnswerResulTitle } from "../userAnswerResul/UserAnswerResulTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="userPointInfos"
          reference="UserPointInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserPointInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userAnswerResuls"
          reference="UserAnswerResul"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAnswerResulTitle} />
        </ReferenceArrayInput>
        <TextInput label="第三方登录类型" source="oauthType" />
        <TextInput label="用户的唯一标识" source="openId" />
        <TextInput label="微信登录会话密钥" source="sessionKey" />
        <TextInput label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextInput label="业务登录凭证" source="sessionId" />
        <TextInput label="手机号码" source="phone" />
        <TextInput label="手机类型" source="mobileType" />
        <TextInput label="用户昵称" source="nickName" />
        <TextInput label="用户头像" source="avatarUrl" />
        <SelectInput
          source="gender"
          label="用户性别"
          choices={[
            { label: "man", value: "Man" },
            { label: "woman", value: "Woman" },
            { label: "unknown", value: "Unknown" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="出生年月" source="birthday" />
      </SimpleForm>
    </Create>
  );
};
