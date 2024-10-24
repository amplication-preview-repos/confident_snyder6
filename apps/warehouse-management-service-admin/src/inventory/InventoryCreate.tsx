import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="CałkowitaLiczbaSprzętu"
          source="caKowitaLiczbaSprzTu"
        />
        <NumberInput
          step={1}
          label="DostępneWMagazynie"
          source="dostPneWMagazynie"
        />
      </SimpleForm>
    </Create>
  );
};
