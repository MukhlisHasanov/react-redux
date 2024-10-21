import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ComponentControl = styled.div`
  width: 600px;
  gap: 4px;
  padding: 10px;
`
export const ButtonControl = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin-top: 20px;
  padding: 0;
  cursor: pointer;
  @media (max-width: 1px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
