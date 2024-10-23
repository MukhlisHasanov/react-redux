import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 520px;
  height: fit-content;
  max-height: 470px;
  border: 1px solid #000000;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
  gap: 20px;
  box-sizing: border-box;
`;


export const CardLabel = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: ${colors.PRIMARY};
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
  padding-top: 10px;
  color: ${colors.PRIMARY};
  text-align: left;
`;
export const UsersNotFound = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
