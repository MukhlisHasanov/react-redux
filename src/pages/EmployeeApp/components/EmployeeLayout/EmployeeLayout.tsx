import {
  EmployeeLayoutWrapper,
  AppHeader,
  HeaderLogo,
  HeaderNav,
  HeaderLink,
  Main,
  LogoImg,
} from "./styles"

import { EmployeeAppLogo} from "assets"

import { v4 } from "uuid"
import { useNavigate } from "react-router-dom"

import { APP_EMPLOYEE_ROUTES } from "constants/routes"

import { EmployeeLayoutProps } from "./types"

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  const navigate = useNavigate()
  const goToEmployeeForm = () => {
    navigate(APP_EMPLOYEE_ROUTES.CREATE_EMPLOYEE)
  }
  const appLinks = {
    [APP_EMPLOYEE_ROUTES.CREATE_EMPLOYEE]: "Create Employee",
    [APP_EMPLOYEE_ROUTES.EMPLOYEES]: "Employees",
  }

  const headerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={link}
      >
        {appLinks[link as keyof typeof appLinks]}
      </HeaderLink>
    )
  })

  return (
    <EmployeeLayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToEmployeeForm}>
          <LogoImg
            src={EmployeeAppLogo}
            alt="logo"
          ></LogoImg>
        </HeaderLogo>
        <HeaderNav>{headerLinks}</HeaderNav>
      </AppHeader>
      <Main>{children}</Main>
    </EmployeeLayoutWrapper>
  )
}
export default EmployeeLayout
