import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "dzia";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.dzia?.toString() || String(record.id);
};
