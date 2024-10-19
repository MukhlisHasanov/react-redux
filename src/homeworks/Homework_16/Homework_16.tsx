import { useAppDispatch, useAppSelector } from "store/hooks"
import { PageWrapper } from "./styles"
import Feedback from "components/Feedback/Feedback"
import {
  feedbackSliceSelectors,
  feedbackSliceAction,
} from "store/redux/feedback/feedbackSlice"

function Homework_16() {
  const dispatch = useAppDispatch()
  let likes = useAppSelector(feedbackSliceSelectors.likes)
  let dislikes = useAppSelector(feedbackSliceSelectors.dislikes)
  const onLike = () => {
    dispatch(feedbackSliceAction.onLike())
  }
  const onDislike = () => {
    dispatch(feedbackSliceAction.onDislike())
  }

  const resetResults = (): void => {
    dispatch(feedbackSliceAction.resetResults())
  }

  return (
    <PageWrapper>
      <Feedback
        likes={likes}
        dislikes={dislikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </PageWrapper>
  )
}

export default Homework_16
