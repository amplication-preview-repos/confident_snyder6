import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AssignmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataPrzydziału" source="dataPrzydziaU" />
        <TextField label="DataZwrotu" source="dataZwrotu" />
        <TextField label="ID" source="id" />
        <TextField label="Opis" source="opis" />
        <TextField label="Pracownik" source="pracownik" />
        <TextField label="Sprzęt" source="sprzT" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
