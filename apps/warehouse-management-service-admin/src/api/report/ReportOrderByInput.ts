import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  dataGenerowania?: SortOrder;
  id?: SortOrder;
  linkDoRaportu?: SortOrder;
  typRaportu?: SortOrder;
  updatedAt?: SortOrder;
};
