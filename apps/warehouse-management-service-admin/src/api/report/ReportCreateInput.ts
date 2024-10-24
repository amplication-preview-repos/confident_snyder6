import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  dataGenerowania?: Date | null;
  linkDoRaportu?: InputJsonValue;
  typRaportu?: "Option1" | null;
};
