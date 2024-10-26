export interface Employee {
  id: string
  name: string
  surname: string
  age: string
  jobPosition: string
}

export interface EmployeeSliceInitialState {
  data: Employee[]
}
