import { createAppSlice } from "store/createAppSlice"
import { Employee, EmployeeSliceInitialState } from "./types"
import { useContext } from "react"
import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout"
import { useNavigate } from "react-router-dom"
import { UserDataProps } from "pages/EmployeeApp/types"
import { v4 } from "uuid"
import { EMPLOYEE_FORM_NAMES } from "pages/EmployeeApp/components/EmployeeForm/types"
import { PayloadAction } from "@reduxjs/toolkit"
import { EmployeeFormValues } from "pages/EmployeeApp/components/EmployeeForm/types"

export const employeeInitialState: EmployeeSliceInitialState = {
  data: [],
  error: undefined,
}

export const employeeSlice = createAppSlice({
  name: "EMPLOYEE",
  initialState: employeeInitialState,
  reducers: create => ({
    createEmployee: create.reducer(
      (
        state: EmployeeSliceInitialState,
        action: PayloadAction<EmployeeFormValues>,
      ) => {
        console.log(action.payload)
        state.data = [...state.data, { ...action.payload, id: v4() }]
      },
    ),
    deleteEmployee: create.reducer(
      (
        state: EmployeeSliceInitialState,
        action: PayloadAction<{ id: string }>,
      ) => {
        state.data = state.data.filter(
          employeeInitialState => employeeInitialState.id !== action.payload.id,
        )
      },
    ),
    deleteAllEmployees: create.reducer(() => employeeInitialState),
  }),

  selectors: {
    employees: (state: EmployeeSliceInitialState) => {
      return state.data
    },
  },
})

export const employeeSliceActions = employeeSlice.actions
export const employeeSliceSelectors = employeeSlice.selectors
