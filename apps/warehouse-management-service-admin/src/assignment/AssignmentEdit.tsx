import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DataPrzydziału" source="dataPrzydziaU" />
        <DateTimeInput label="DataZwrotu" source="dataZwrotu" />
        <TextInput label="Opis" multiline source="opis" />
        <TextInput label="Pracownik" source="pracownik" />
        <TextInput label="Sprzęt" source="sprzT" />
      </SimpleForm>
    </Edit>
  );
};
