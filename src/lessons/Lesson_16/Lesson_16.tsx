import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

import Counter from "components/Counter/Counter"
import { PageWrapper } from "./styles"

function Lesson_16() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)
  const onPlus = () => {
    const action = counterSliceActions.plus()

    dispatch(action)
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(2))
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }

  return (
    <PageWrapper>
      <Counter
        count={count}
        onDivide={onDivide}
        onMultiply={onMultiply}
        onPlus={onPlus}
        onMinus={onMinus}
      />
    </PageWrapper>
  )
}

export default Lesson_16
