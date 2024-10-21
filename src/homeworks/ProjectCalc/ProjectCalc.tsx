import Button from "components/Button/Button"
import { PageWrapper, ComponentControl, ButtonControl } from "./styles"
import Input from "components/Input/Input"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { calcSlice } from "store/redux/calc/calcSlice"

function ProjectCalc() {
  // const [country, setCountry] = useState<string>("");
  // const onInputCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setCountry(event.target.value);
  // };
  const one = 1
  const two = 2

  const [inputValue, setInputValue] = useState(0) // Храним значение из input
  const dispatch = useDispatch()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value)) // Обновляем значение
  }

  const handleAdd1 = () => {
    dispatch(calcSlice.actions.plus(one))
    setInputValue(one)
    // Передаем значение в action
  }

  const handleAdd2 = () => {
    dispatch(calcSlice.actions.plus(two))
    setInputValue(two)
    // Передаем значение в action
  }

  return (
    <PageWrapper>
      <ComponentControl>
        <Input
          id=""
          name="firstInput"
          placeholder=""
          label="Enter first integer"
          value={inputValue}
          onChange={handleInputChange}
        />

        <ButtonControl>
          <Button name="1" onClick={handleAdd1} />
          <Button name="2" onClick={handleAdd2}/>
          <Button name="3" />
          <Button name="+" />
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" />
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="*" />
          <Button name="," />
          <Button name="0" />
          <Button name="=" />
          <Button name="/" />
        </ButtonControl>
      </ComponentControl>
    </PageWrapper>
  )
}

export default ProjectCalc
