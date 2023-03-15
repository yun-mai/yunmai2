import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="创建时间" />
        <DateField source="updatedAt" label="最后修改时间" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <TextField label="第三方登录类型" source="oauthType" />
        <TextField label="用户的唯一标识" source="openId" />
        <TextField label="微信登录会话密钥" source="sessionKey" />
        <TextField label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextField label="业务登录凭证" source="sessionId" />
        <TextField label="手机号码" source="phone" />
        <TextField label="手机类型" source="mobileType" />
        <TextField label="用户昵称" source="nickName" />
        <TextField label="用户头像" source="avatarUrl" />
        <TextField label="用户性别" source="gender" />
        <TextField label="出生年月" source="birthday" />
        <ReferenceManyField
          reference="UserPointInfo"
          target="UserId"
          label="UserPointInfos"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="用户ID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="积分等级ID" source="pointLevelId" />
            <TextField label="总积分" source="totalPoints" />
            <TextField label="当前积分" source="currentPoints" />
            <TextField label="积分总消费" source="totalExpendPoint" />
            <TextField label="丹药值" source="pelletValue" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserAnswerResul"
          target="UserId"
          label="UserAnswerResuls"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
