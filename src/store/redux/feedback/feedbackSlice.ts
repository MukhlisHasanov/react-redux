import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceInitialState } from "./types"

export const feedbackInitialState: FeedbackSliceInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    onLike: create.reducer((state: FeedbackSliceInitialState) => {
      state.likes = state.likes + 1
    }),
    onDislike: create.reducer((state: FeedbackSliceInitialState) => {
      state.dislikes = state.dislikes + 1
    }),
    resetResults: create.reducer((state: FeedbackSliceInitialState) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),
  selectors: {
    likes: (state: FeedbackSliceInitialState) => {
      return state.likes
    },
    dislikes: (state: FeedbackSliceInitialState) => {
      return state.dislikes
    },
    resetResults: (state: FeedbackSliceInitialState) => {
      return state.dislikes, state.likes
    },
  },
})

export const feedbackSliceAction = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
