import {
  CardWrapper,
  CardLabel,
  CardItem,
  UsersNotFound,
  PageWrapper,
  ButtonControl,
} from "./styles"

import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  employeeSliceSelectors,
  employeeSliceActions,
} from "store/redux/employeeApp/employeeSlice"
import { Employee } from "store/redux/employeeApp/types"
import Button from "components/Button/Button"

function EmployeeCard() {
  const dispatch = useAppDispatch()

  const deleteAllEmployees = () => {
    dispatch(employeeSliceActions.deleteAllEmployees())
  }

  const employeeInitialState = useAppSelector(employeeSliceSelectors.employees)
  const employeeCards = employeeInitialState.map((employee: Employee) => {
    const deleteEmployee = () => {
      dispatch(employeeSliceActions.deleteEmployee({ id: employee.id }))
    }
    return (
      <PageWrapper>
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
          <Button isDeleteVariant name="Delete" onClick={deleteEmployee} />
        </CardWrapper>
        <ButtonControl>
          <Button
            isDeleteVariant
            name="Remove All Employees"
            onClick={deleteAllEmployees}
          />
        </ButtonControl>
      </PageWrapper>
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
