import { useContext } from "react";
import { CardWrapper, CardLabel, CardItem, UsersNotFound } from "./styles";
import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout";
import { UserDataProps } from "pages/EmployeeApp/types";

function EmployeeCard() {
  const { userData } = useContext(EmployeeContext);
  const userCards = userData.map((user: UserDataProps) => {
    return (
      <CardWrapper>
        <CardLabel>
          Name:
          <CardItem>{user.name}</CardItem>
        </CardLabel>
        <CardLabel>
          Surname:
          <CardItem>{user.surname}</CardItem>
        </CardLabel>
        <CardLabel>
          Age:
          <CardItem>{user.age}</CardItem>
        </CardLabel>
        <CardLabel>
          Job Position:
          <CardItem>{user.jobPosition}</CardItem>
        </CardLabel>
      </CardWrapper>
    );
  });
  return (
    <>
      {userData.length > 0 ? (
        userCards
      ) : (
        <UsersNotFound>Users not found</UsersNotFound>
      )}{" "}
    </>
  );
}

export default EmployeeCard;
