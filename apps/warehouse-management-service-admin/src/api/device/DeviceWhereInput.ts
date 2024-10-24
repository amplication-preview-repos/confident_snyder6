import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeviceWhereInput = {
  dataZakupu?: DateTimeNullableFilter;
  id?: StringFilter;
  kodProducenta?: StringNullableFilter;
  lokalizacja?: StringNullableFilter;
  nazwa?: StringNullableFilter;
  numerSeryjny?: StringNullableFilter;
  status?: "Option1";
  typSprzetu?: StringNullableFilter;
};
