import { ComponentControl, PageWrapper } from "./styles"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import { useState } from "react"

function Homework_15() {
  const [count, setCount] = useState<number>(0)
  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1
    })
  }

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1
    })
  }

  return (
    <PageWrapper>
      <ComponentControl>
        <Counter count={count} onMinus={onMinus} onPlus={onPlus} />{" "}
        <Input id="first" name="name" placeholder="Enter smth" />
        <Button name="Money" type="submit" />
      </ComponentControl>
    </PageWrapper>
  )
}

export default Homework_15
