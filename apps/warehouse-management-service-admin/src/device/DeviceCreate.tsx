import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const DeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
