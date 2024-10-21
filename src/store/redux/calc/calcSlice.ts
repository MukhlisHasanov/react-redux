import { createAppSlice } from "store/createAppSlice"
import { CalcSliceInitialState } from "./types"

const calcInitialState: CalcSliceInitialState = {
  calc: 0,
}

export const calcSlice = createAppSlice({
  name: "CALC",
  initialState: calcInitialState,
  reducers: create => ({
    plus: create.reducer(
      (state: CalcSliceInitialState, action: { payload: number }) => {
        state.calc = state.calc + action.payload
      },
    ),
  }),
})
