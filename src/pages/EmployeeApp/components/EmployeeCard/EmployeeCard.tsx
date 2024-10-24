import { useAppSelector, useAppDispatch } from "store/hooks"
import { Employee } from "store/redux/employeeApp/types"
import {
  employeeSliceSelectors,
  employeeSliceActions,
} from "store/redux/employeeApp/employeeSlice"
import Button from "components/Button/Button"

import {
  PageWrapper,
  EmployeeCardContainer,
  CardLabel,
  LabelName,
  CardItem,
  UsersNotFound,
  ButtonControl,
} from "./styles"

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
        <EmployeeCardContainer>
          <CardLabel>
            <LabelName>Name</LabelName>
            <CardItem>{employee.name}</CardItem>
          </CardLabel>
          <CardLabel>
            <LabelName>Surname</LabelName>
            <CardItem>{employee.surname}</CardItem>
          </CardLabel>
          <CardLabel>
            <LabelName>Age</LabelName>
            <CardItem>{employee.age}</CardItem>
          </CardLabel>
          <CardLabel>
            <LabelName>Job Position</LabelName>
            <CardItem>{employee.jobPosition}</CardItem>
          </CardLabel>
          <Button isDeleteVariant name="Delete" onClick={deleteEmployee} />
        </EmployeeCardContainer>
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
