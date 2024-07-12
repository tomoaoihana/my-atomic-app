import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = (props) => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #40514e;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

const SLink = styled(Link)`
  margin: 0 8px;
  color: #fff;
`;
