import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReportList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Reports"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataGenerowania" source="dataGenerowania" />
        <TextField label="ID" source="id" />
        <TextField label="LinkDoRaportu" source="linkDoRaportu" />
        <TextField label="TypRaportu" source="typRaportu" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
