import styled from "@emotion/styled"
import { colors } from "styles/colors"
import deleteButtonActivate from "homeworks/Homework_17/Homework_17"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: ${colors.PRIMARY};
`

export const JokeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  overflow-y: auto;
`

export const JokesContainer = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`

export const JokeText = styled.li`
  font-size: 24px;
  font-weight: bold;
`

export const JokeWrapper = styled.div`
  display: flex;
  gap: 10px;
`
export const JokeSetup = styled.div`
  color: ${colors.PRIMARY};
`
export const JokePunchline = styled.div`
  color: ${colors.PRIMARY_BLUE};
`

export const ButtonControl = styled.div`
  min-width: 50px;
  color: ${colors.ERROR};

`
export const JokeContainer = styled.div`
display: flex;
flex-direction: row;
flex: 1;
justify-content: space-between;
`