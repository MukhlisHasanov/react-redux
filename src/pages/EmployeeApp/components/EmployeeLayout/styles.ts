import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const EmployeeLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background-color: #faf9ff;
  border-bottom: 1px solid black;
  padding: 20px 40px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 28px;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  font-weight: normal;
  color: #000000;
`;

export const Main = styled.main`
  display: flex;
  padding: 120px;
  flex: 1;
  background-color: #112233;
  justify-content: center;
  color: white;  
`;
