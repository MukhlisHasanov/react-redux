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
  background-color: white;
  border-bottom: 1px solid black;
  padding: 20px 40px;
  color: black; // NEED TO CHECK FIGMA
`;

export const HeaderLogo = styled.div`
  // NEED TO CHECK FIGMA
  width: 80px;
  height: 100%;
  /* font-size: 30px;
  font-weight: bold; */
  /* align-items: center; */
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderNav = styled.nav`
  display: flex;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif; // NEED TO CHECK FIGMA
  align-items: center;

  gap: 30px;
  height: 100%;
`;

export const HeaderLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  font-weight: normal;
`;

export const Main = styled.main`
  display: flex;
  padding: 30px;
  flex: 1;
  background-color: #112233;
  justify-content: center;
`;
