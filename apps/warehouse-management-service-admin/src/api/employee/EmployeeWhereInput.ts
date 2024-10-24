import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  dzia?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  imie?: StringNullableFilter;
  nazwisko?: StringNullableFilter;
  telefonKontaktowy?: StringNullableFilter;
};
