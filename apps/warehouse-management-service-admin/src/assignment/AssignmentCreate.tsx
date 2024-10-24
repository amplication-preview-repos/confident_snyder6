import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AssignmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="DataPrzydziału" source="dataPrzydziaU" />
        <DateTimeInput label="DataZwrotu" source="dataZwrotu" />
        <TextInput label="Opis" multiline source="opis" />
        <TextInput label="Pracownik" source="pracownik" />
        <TextInput label="Sprzęt" source="sprzT" />
      </SimpleForm>
    </Create>
  );
};
