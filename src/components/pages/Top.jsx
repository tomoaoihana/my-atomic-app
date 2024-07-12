import React from "react";
import styled from "styled-components";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
import axios from "axios";

export const Top = () => {
  const navigation = useNavigate();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigation("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigation("/users");
  };
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SContainer>
      <h2>Top</h2>
      <SecondaryButton onClick={onClickAdmin} buttonText="Admin User" />
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral} buttonText="General User" />
      <br />
      <br />
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のユーザー</button>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
