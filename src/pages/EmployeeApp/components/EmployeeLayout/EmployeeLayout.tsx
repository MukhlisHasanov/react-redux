import {
  EmployeeLayoutWrapper,
  AppHeader,
  HeaderLogo,
  HeaderNav,
  HeaderLink,
  Main,
} from "./styles";

import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";
import { EmployeeContextState, UserDataProps } from "pages/EmployeeApp/types";

import { APP_EMPLOYEE_ROUTES } from "constants/routes";

import { EmployeeLayoutProps } from "./types";

export const EmployeeContext = createContext<EmployeeContextState>({
  userData: [],
  setUserData: () => {},
});

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  const [userData, setUserData] = useState<UserDataProps[]>([]);

  const navigate = useNavigate();
  const goToEmployeeForm = () => {
    navigate(APP_EMPLOYEE_ROUTES.CREATE_EMPLOYEE);
  };
  const appLinks = {
    [APP_EMPLOYEE_ROUTES.CREATE_EMPLOYEE]: "Create Employee",
    [APP_EMPLOYEE_ROUTES.EMPLOYEES]: "Employees",
  };

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
    );
  });

  return (
    <EmployeeContext.Provider value={{ userData, setUserData }}>
      <EmployeeLayoutWrapper>
        <AppHeader>
          <HeaderLogo onClick={goToEmployeeForm}>Logo</HeaderLogo>
          <HeaderNav>{headerLinks}</HeaderNav>
        </AppHeader>
        <Main>{children}</Main>
      </EmployeeLayoutWrapper>
    </EmployeeContext.Provider>
  );
}
export default EmployeeLayout;
