import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const InventoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="CałkowitaLiczbaSprzętu"
          source="caKowitaLiczbaSprzTu"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DostępneWMagazynie" source="dostPneWMagazynie" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
