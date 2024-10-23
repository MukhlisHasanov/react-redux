import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { RandomJokeSliceInitialState } from "./types"
import { v4 } from "uuid"

export const randomJokeInitialState: RandomJokeSliceInitialState = {
  data: [],
  error: undefined,
  isLoading: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJoke: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const RANDOM_JOKE_API_URL: string =
          "https://official-joke-api.appspot.com/random_joke"

        const response = await fetch(RANDOM_JOKE_API_URL)

        const result = await response.json()

        if (response.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: RandomJokeSliceInitialState, action) => {
          state.isLoading = true
          state.error = undefined
        },
        fulfilled: (state: RandomJokeSliceInitialState, action) => {
          state.data = [
            ...state.data,
            {
              id: v4(),
              type: action.payload.type,
              setup: action.payload.setup,
              punchline: action.payload.punchline,
            },
          ]
          state.isLoading = false
        },
        rejected: (state: RandomJokeSliceInitialState, action) => {
          state.error = "Some Network error"
          state.isLoading = false
        },
      },
    ),
    deleteAllJokes: create.reducer((state: RandomJokeSliceInitialState) => {
      state.data = []
      state.error = undefined
    }),

    deleteJoke: create.reducer(
      (
        state: RandomJokeSliceInitialState,
        action: PayloadAction<{ id: string }>,
      ) => {
        state.data = state.data.filter(obj => obj.id !== action.payload.id)
      },
    ),
  }),
  selectors: {
    randomJokes: (state: RandomJokeSliceInitialState) => state,
  },
})

export const randomJokeSliceActions = randomJokeSlice.actions
export const randomJokeSliceSelectors = randomJokeSlice.selectors
