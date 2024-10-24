import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Dział" source="dzia" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Imie" source="imie" />
        <TextInput label="Nazwisko" source="nazwisko" />
        <TextInput label="TelefonKontaktowy" source="telefonKontaktowy" />
      </SimpleForm>
    </Create>
  );
};
