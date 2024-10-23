import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  ButtonControl,
  JokeCard,
  JokeContainer,
  JokePunchline,
  JokesContainer,
  JokeSetup,
  JokeText,
  PageWrapper,
} from "./styles"
import {
  randomJokeSliceSelectors,
  randomJokeSliceActions,
} from "store/redux/randomJokeSlice/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJokeSlice/types"
import Button from "components/Button/Button"

function Homework_17() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    randomJokeSliceSelectors.randomJokes,
  )

  const getRandomJoke = () => {
    dispatch(randomJokeSliceActions.getRandomJoke())
  }

  const deleteAllJokes = () => {
    dispatch(randomJokeSliceActions.deleteAllJokes())
  }

  const randomJokes = data.map((randomJoke: RandomJoke) => {
    const deleteJoke = () => {
      dispatch(randomJokeSliceActions.deleteJoke({ id: randomJoke.id }))
    }
    return (
      <JokeContainer>
        <JokeText key={randomJoke.id}>
          <JokeSetup>{randomJoke.setup} </JokeSetup>
          <JokePunchline>{randomJoke.punchline}</JokePunchline>
        </JokeText>
        <ButtonControl>
          <Button
            key={randomJoke.id}
            isDeleteVariant={true}
            disabled={isLoading}
            name="X"
            onClick={deleteJoke}
          />
        </ButtonControl>
      </JokeContainer>
    )
  })
  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <JokeCard>
        {data.length != 0 && (
          <Button
            disabled={isLoading}
            name="Delete All Jokes"
            onClick={deleteAllJokes}
          />
        )}
        <JokesContainer>{data.length > 0 && randomJokes}</JokesContainer>
        <Button
          disabled={isLoading}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </JokeCard>
    </PageWrapper>
  )
}

export default Homework_17
