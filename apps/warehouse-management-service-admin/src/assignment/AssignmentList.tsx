import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssignmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Assignments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataPrzydziału" source="dataPrzydziaU" />
        <TextField label="DataZwrotu" source="dataZwrotu" />
        <TextField label="ID" source="id" />
        <TextField label="Opis" source="opis" />
        <TextField label="Pracownik" source="pracownik" />
        <TextField label="Sprzęt" source="sprzT" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
