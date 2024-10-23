export interface RandomJoke {
  setup: string
  punchline: string
  type: string
  id: string
}

export interface RandomJokeSliceInitialState {
  data: RandomJoke[]
  error: undefined | string
  isLoading: boolean
}
