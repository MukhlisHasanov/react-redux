import GlobalStyles from "styles/GlobalStyles"
import { Route, Routes } from "react-router-dom"

import EmployeeLayout from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout"
import EmployeeForm from "pages/EmployeeApp/components/EmployeeForm/EmployeeForm"
import EmployeeCard from "pages/EmployeeApp/components/EmployeeCard/EmployeeCard"

import { APP_EMPLOYEE_ROUTES } from "constants/routes"

// HOMEWORKS
import Homework_15 from "homeworks/Homework_15/Homework_15"
import Homework_16 from "homeworks/Homework_16/Homework_16"
import Homework_17 from "homeworks/Homework_17/Homework_17"
// LESSONS
import Lesson_16 from "lessons/Lesson_16/Lesson_16"
import Lesson_17 from "lessons/Lesson_17/Lesson_17"


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
      {/* //CONSULTATIONS */}
      <EmployeeLayout>
        <Routes>
          <Route
            path={APP_EMPLOYEE_ROUTES.CREATE_EMPLOYEE}
            element={<EmployeeForm />}
          />
          <Route
            path={APP_EMPLOYEE_ROUTES.EMPLOYEES}
            element={<EmployeeCard />}
          />
          <Route
            path={APP_EMPLOYEE_ROUTES.NOT_FOUND}
            element="Page Is Not Found"
          />
        </Routes>
      </EmployeeLayout>
    </>
  )
}
export default App
