import { createAppSlice } from "store/createAppSlice"
import { CounterSliceInitialState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

// Прописываем значения по умолчанию для count, чтобы затем передать в Global state в redux store
const counterInitialState: CounterSliceInitialState = {
  count: 0,
}

// Создаем slice
export const counterSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахождения событий слайса в redux devtools и для идентификации actions
  name: "COUNTER",
  initialState: counterInitialState,

  // reducers: (create) => {
  //     return {}
  // },
  // reducers - функции изменяющие состояния counterSlice
  reducers: create => ({
    plus: create.reducer((state: CounterSliceInitialState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceInitialState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer(
      (state: CounterSliceInitialState, actions: PayloadAction<number>) => {
        state.count = Number((state.count * actions.payload).toFixed(2))
      },
    ),
    divide: create.reducer(
      (state: CounterSliceInitialState, actions: PayloadAction<number>) => {
        state.count = Number((state.count / actions.payload).toFixed(2))
      },
    ),
  }),
  selectors: {
    count: (state: CounterSliceInitialState) => {
      return state.count
    },
  },
})

export const counterSliceActions = counterSlice.actions

export const counterSliceSelectors = counterSlice.selectors
