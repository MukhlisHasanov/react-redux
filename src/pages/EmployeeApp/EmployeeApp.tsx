import { Route, Routes } from "react-router-dom";

import EmployeeLayout from "./components/EmployeeLayout/EmployeeLayout";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

import { APP_EMPLOYEE_ROUTES } from "constants/routes";

function EmployeeApp() {
  return (
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
  );
}
export default EmployeeApp;
