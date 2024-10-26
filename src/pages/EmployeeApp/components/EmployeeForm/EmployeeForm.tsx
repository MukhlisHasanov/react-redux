import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

import Input from "components/Input/Input"
import Button from "components/Button/Button"


import { APP_EMPLOYEE_ROUTES } from "constants/routes"

import { EmployeeFormContainer, InputContainer } from "./styles"
import { EMPLOYEE_FORM_NAMES } from "./types"

import { useAppDispatch } from "store/hooks"
import {
  employeeSliceActions,
} from "store/redux/employeeApp/employeeSlice"

function EmployeeForm() {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
      .required("Name is required filed")
      .min(2, "The minimum length of name is 2")
      .max(50, "The maximum length of name is 50"),
    [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
      .required("Surname is required filed")
      .max(15, "The maximum length of surname is 15"),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
      .required("Age is required filed")
      .min(1, "The minimum length of age is 1")
      .max(3, "The maximum length of age is 3"),
    [EMPLOYEE_FORM_NAMES.JOB_POSITION]: Yup.string().max(
      30,
      "The maximum length of job position is 30",
    ),
  })

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.NAME]: "",
      [EMPLOYEE_FORM_NAMES.SURNAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.JOB_POSITION]: "",
    },
    validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: values => {
      dispatch(employeeSliceActions.createEmployee(values))
      navigate(APP_EMPLOYEE_ROUTES.EMPLOYEES)
    },
  })

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Input
          id="employee-name"
          name={EMPLOYEE_FORM_NAMES.NAME}
          placeholder="Enter your name"
          label="Name*"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Input
          id="employee-surname"
          name={EMPLOYEE_FORM_NAMES.SURNAME}
          placeholder="Enter your surname"
          label="Surname*"
          onChange={formik.handleChange}
          value={formik.values.surname}
          error={formik.errors.surname}
        />
        <Input
          id="employee-age"
          name={EMPLOYEE_FORM_NAMES.AGE}
          placeholder="Enter your age"
          label="Age*"
          onChange={formik.handleChange}
          value={formik.values.age}
          error={formik.errors.age}
        />
        <Input
          id="employee-job-position"
          name={EMPLOYEE_FORM_NAMES.JOB_POSITION}
          placeholder="Enter your job position"
          label="Job Position"
          onChange={formik.handleChange}
          value={formik.values.jobPosition}
          error={formik.errors.jobPosition}
        />
      </InputContainer>

      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  )
}
export default EmployeeForm
