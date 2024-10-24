export enum EMPLOYEE_FORM_NAMES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB_POSITION = "jobPosition",
}

export interface EmployeeFormValues {
  [EMPLOYEE_FORM_NAMES.NAME]: string
  [EMPLOYEE_FORM_NAMES.SURNAME]: string
  [EMPLOYEE_FORM_NAMES.AGE]: string
  [EMPLOYEE_FORM_NAMES.JOB_POSITION]: string
}
