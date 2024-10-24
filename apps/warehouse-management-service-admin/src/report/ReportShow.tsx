import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataGenerowania" source="dataGenerowania" />
        <TextField label="ID" source="id" />
        <TextField label="LinkDoRaportu" source="linkDoRaportu" />
        <TextField label="TypRaportu" source="typRaportu" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
