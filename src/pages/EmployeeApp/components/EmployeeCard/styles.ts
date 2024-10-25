import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  flex: 1;
  gap: 50px;
`

export const CardsPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 635px;
  height: 570px;
  border-radius: 4px;
  padding: 60px;
  background-color: #ffffff;
`

export const CardLabel = styled.span`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 65px;
  gap: 8px;
`

export const LabelName = styled.div`
  font-family: "Lato", sans-serif;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #6f6f6f;
`

export const CardItem = styled.div`
  font-family: "Lato";
  font-size: 28px;
  font-weight: 700;
  line-height: 36.4px;
  text-align: left;
  color: #1c1c1c;
`
export const UsersNotFound = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
`

export const ButtonControl = styled.div`
  width: 700px;
  padding-top: 100px; //?
`
