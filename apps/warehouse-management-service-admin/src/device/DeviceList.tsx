import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeviceList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Devices"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataZakupu" source="dataZakupu" />
        <TextField label="ID" source="id" />
        <TextField label="KodProducenta" source="kodProducenta" />
        <TextField label="Lokalizacja" source="lokalizacja" />
        <TextField label="Nazwa" source="nazwa" />
        <TextField label="NumerSeryjny" source="numerSeryjny" />
        <TextField label="Status" source="status" />
        <TextField label="TypSprzetu" source="typSprzetu" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
