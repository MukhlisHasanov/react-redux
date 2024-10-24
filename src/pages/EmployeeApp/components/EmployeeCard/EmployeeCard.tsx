import { useContext } from "react"
import { CardWrapper, CardLabel, CardItem, UsersNotFound } from "./styles"
import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout"
import { UserDataProps } from "pages/EmployeeApp/types"
import { useAppSelector, useAppDispatch } from "store/hooks"
import { employeeSliceSelectors } from "store/redux/employeeApp/employeeSlice"
import { Employee } from "store/redux/employeeApp/types"

function EmployeeCard() {
  const employeeInitialState = useAppSelector(employeeSliceSelectors.employees)
  const employeeCards = employeeInitialState.map((employee: Employee) => {
    return (
      <CardWrapper>
        <CardLabel>
          Name:
          <CardItem>{employee.name}</CardItem>
        </CardLabel>
        <CardLabel>
          Surname:
          <CardItem>{employee.surname}</CardItem>
        </CardLabel>
        <CardLabel>
          Age:
          <CardItem>{employee.age}</CardItem>
        </CardLabel>
        <CardLabel>
          Job Position:
          <CardItem>{employee.jobPosition}</CardItem>
        </CardLabel>
      </CardWrapper>
    )
  })
  return (
    <>
      {employeeInitialState.length > 0 ? (
        employeeCards
      ) : (
        <UsersNotFound>Users not found</UsersNotFound>
      )}{" "}
    </>
  )
}

export default EmployeeCard
