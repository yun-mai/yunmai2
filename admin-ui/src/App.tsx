import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserAnswerResulList } from "./userAnswerResul/UserAnswerResulList";
import { UserAnswerResulCreate } from "./userAnswerResul/UserAnswerResulCreate";
import { UserAnswerResulEdit } from "./userAnswerResul/UserAnswerResulEdit";
import { UserAnswerResulShow } from "./userAnswerResul/UserAnswerResulShow";
import { UserPointInfoList } from "./userPointInfo/UserPointInfoList";
import { UserPointInfoCreate } from "./userPointInfo/UserPointInfoCreate";
import { UserPointInfoEdit } from "./userPointInfo/UserPointInfoEdit";
import { UserPointInfoShow } from "./userPointInfo/UserPointInfoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UserService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserAnswerResul"
          list={UserAnswerResulList}
          edit={UserAnswerResulEdit}
          create={UserAnswerResulCreate}
          show={UserAnswerResulShow}
        />
        <Resource
          name="UserPointInfo"
          list={UserPointInfoList}
          edit={UserPointInfoEdit}
          create={UserPointInfoCreate}
          show={UserPointInfoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
