import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  createdAt?: SortOrder;
  dataZakupu?: SortOrder;
  id?: SortOrder;
  kodProducenta?: SortOrder;
  lokalizacja?: SortOrder;
  nazwa?: SortOrder;
  numerSeryjny?: SortOrder;
  status?: SortOrder;
  typSprzetu?: SortOrder;
  updatedAt?: SortOrder;
};
