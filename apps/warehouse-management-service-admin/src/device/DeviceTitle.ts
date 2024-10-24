import { Device as TDevice } from "../api/device/Device";

export const DEVICE_TITLE_FIELD = "kodProducenta";

export const DeviceTitle = (record: TDevice): string => {
  return record.kodProducenta?.toString() || String(record.id);
};
