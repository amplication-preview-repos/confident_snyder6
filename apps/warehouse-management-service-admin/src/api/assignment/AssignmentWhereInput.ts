import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssignmentWhereInput = {
  dataPrzydziaU?: DateTimeNullableFilter;
  dataZwrotu?: DateTimeNullableFilter;
  id?: StringFilter;
  opis?: StringNullableFilter;
  pracownik?: StringNullableFilter;
  sprzT?: StringNullableFilter;
};
