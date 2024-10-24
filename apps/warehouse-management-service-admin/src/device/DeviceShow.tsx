import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DeviceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataZakupu" source="dataZakupu" />
        <TextField label="ID" source="id" />
        <TextField label="KodProducenta" source="kodProducenta" />
        <TextField label="Lokalizacja" source="lokalizacja" />
        <TextField label="Nazwa" source="nazwa" />
        <TextField label="NumerSeryjny" source="numerSeryjny" />
        <TextField label="Status" source="status" />
        <TextField label="TypSprzetu" source="typSprzetu" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
