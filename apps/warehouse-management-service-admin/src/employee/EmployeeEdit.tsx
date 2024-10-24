import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Dział" source="dzia" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Imie" source="imie" />
        <TextInput label="Nazwisko" source="nazwisko" />
        <TextInput label="TelefonKontaktowy" source="telefonKontaktowy" />
      </SimpleForm>
    </Edit>
  );
};
