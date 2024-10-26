import { createAppSlice } from "store/createAppSlice"
import { EmployeeSliceInitialState } from "./types"
import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"
import { EmployeeFormValues } from "pages/EmployeeApp/components/EmployeeForm/types"

export const employeeInitialState: EmployeeSliceInitialState = {
  data: [],
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
