import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
