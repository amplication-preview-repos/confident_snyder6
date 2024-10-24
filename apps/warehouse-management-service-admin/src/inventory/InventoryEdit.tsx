import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
