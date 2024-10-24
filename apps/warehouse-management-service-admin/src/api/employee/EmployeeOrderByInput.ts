import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  dzia?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  imie?: SortOrder;
  nazwisko?: SortOrder;
  telefonKontaktowy?: SortOrder;
  updatedAt?: SortOrder;
};
