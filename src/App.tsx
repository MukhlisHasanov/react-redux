import GlobalStyles from "styles/GlobalStyles"

// HOMEWORKS
import Homework_15 from "homeworks/Homework_15/Homework_15"
import Homework_16 from "homeworks/Homework_16/Homework_16"
import Homework_17 from "homeworks/Homework_17/Homework_17"
// LESSONS
import Lesson_16 from "lessons/Lesson_16/Lesson_16"
import Lesson_17 from "lessons/Lesson_17/Lesson_17"
import EmployeeApp from "pages/EmployeeApp/EmployeeApp"

//CONSULTATIONS

function App() {
  return (
    <>
      <GlobalStyles />
      {/* HOMEWORKS */}
      {/* <Homework_15 /> */}
      {/* <Homework_16 /> */}
      {/* <Homework_17 /> */}
      {/* // LESSONS */}
      {/* <Lesson_16 /> */}
      {/* <Lesson_17 /> */}
      <EmployeeApp />
      {/* //CONSULTATIONS */}
    </>
  )
}
export default App
