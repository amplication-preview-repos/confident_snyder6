import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const DeviceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DataZakupu" source="dataZakupu" />
        <TextInput label="KodProducenta" source="kodProducenta" />
        <TextInput label="Lokalizacja" source="lokalizacja" />
        <TextInput label="Nazwa" source="nazwa" />
        <TextInput label="NumerSeryjny" source="numerSeryjny" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="TypSprzetu" source="typSprzetu" />
      </SimpleForm>
    </Edit>
  );
};
