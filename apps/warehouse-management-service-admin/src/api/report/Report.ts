import { JsonValue } from "type-fest";

export type Report = {
  createdAt: Date;
  dataGenerowania: Date | null;
  id: string;
  linkDoRaportu: JsonValue;
  typRaportu?: "Option1" | null;
  updatedAt: Date;
};
