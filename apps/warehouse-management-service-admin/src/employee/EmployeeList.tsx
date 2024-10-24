import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dział" source="dzia" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Imie" source="imie" />
        <TextField label="Nazwisko" source="nazwisko" />
        <TextField label="TelefonKontaktowy" source="telefonKontaktowy" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
