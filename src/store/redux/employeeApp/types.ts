export interface Employee {
  id: string
  name: string
  surname: string
  age: string
  jobPosition: string
}

export interface EmployeeSliceInitialState {
  data: Employee[]
  error: undefined | string
  isFetching: boolean
}
