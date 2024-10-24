import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  dataGenerowania?: Date | null;
  linkDoRaportu?: InputJsonValue;
  typRaportu?: "Option1" | null;
};
