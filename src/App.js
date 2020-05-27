import React, { Component } from "react";

import { Admin, Resource } from "react-admin";
// import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { UserList, UserEdit, UserCreate } from "./users";
// import { PostList, PostEdit, PostCreate } from "./posts";
// import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./CastomHome";
import authProvider from "./authProvider";
import dataProvider from "./myDataProvider";
import dataProviderQL from "./myDataProviderQL";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// import buildGraphQLProvider from "ra-data-graphql";
// import buildQuery from "./buildQuery"; // see Specify your queries and mutations section below
// import { __schema as schema } from './schema';
// import { typeDefs as schema } from "./schema";

const client = new ApolloClient({ uri: "http://localhost:5000" });

// const ApolloApp = (AppComponent) => (
//   <ApolloProvider client={client}>
//     <AppComponent />
//   </ApolloProvider>
// );

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Admin
        dashboard={Dashboard}
        dataProvider={dataProviderQL}
        authProvider={authProvider}
      >
        {/* <Resource name="posts" list={ListGuesser} /> */}
        {/* <Resource name="posts" list={PostList} edit={PostEdit} /> */}
        {/* <Resource
  name="posts"
  list={PostList}
  edit={PostEdit}
  create={PostCreate}
  icon={PostIcon}
/> */}
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          icon={UserIcon}
        />
      </Admin>
    </ApolloProvider>
  );
};

export default App;
// export default ApolloApp(App);
