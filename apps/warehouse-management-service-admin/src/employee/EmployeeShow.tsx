import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dział" source="dzia" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Imie" source="imie" />
        <TextField label="Nazwisko" source="nazwisko" />
        <TextField label="TelefonKontaktowy" source="telefonKontaktowy" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
