export type Device = {
  createdAt: Date;
  dataZakupu: Date | null;
  id: string;
  kodProducenta: string | null;
  lokalizacja: string | null;
  nazwa: string | null;
  numerSeryjny: string | null;
  status?: "Option1" | null;
  typSprzetu: string | null;
  updatedAt: Date;
};
