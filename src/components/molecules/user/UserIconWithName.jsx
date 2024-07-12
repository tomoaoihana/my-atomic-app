import React, { memo } from "react";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  // console.log(context);
  return (
    <SContainer>
      <SImg alt={name} src={image} height={160} width={160} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>edit</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-top: 8px;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
  margin-top: 8px;
  display: inline-block;
`;
