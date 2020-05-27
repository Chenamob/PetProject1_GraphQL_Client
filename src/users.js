import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  EditButton,
} from "react-admin";
// import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";
import MyUrlField from "./MyUrlField";

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ""}</span>;
};

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <TextField source="username" /> */}
      <EmailField source="email" />
      {/* <TextField source="address.street" /> */}
      {/* <TextField source="phone" /> */}
      {/* <UrlField  source="website" /> */}
      {/* <MyUrlField source="website" /> */}
      {/* <TextField source="company.name" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="name" />
      {/* <ReferenceInput source="id" reference="users"> */}
      {/* <SelectInput optionText="name" /> */}
      {/* </ReferenceInput> */}
      <TextInput source="email" />
      {/* <TextInput multiline source="body" /> */}
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users"> */}
      {/* <SelectInput optionText="name" /> */}
      {/* </ReferenceInput> */}
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);
