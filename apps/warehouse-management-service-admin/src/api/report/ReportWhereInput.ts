import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ReportWhereInput = {
  dataGenerowania?: DateTimeNullableFilter;
  id?: StringFilter;
  linkDoRaportu?: JsonFilter;
  typRaportu?: "Option1";
};
