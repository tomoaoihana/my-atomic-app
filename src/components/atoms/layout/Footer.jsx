import React from "react";

import styled from "styled-components";

export const Footer = (props) => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  font-size: 12px;
  background-color: #40514e;
  color: #fff;
  text-align: center;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
