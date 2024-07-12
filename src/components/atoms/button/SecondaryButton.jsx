import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { buttonText, onClick } = props;
  return <SButton onClick={onClick}>{buttonText}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #fff;
  border: 1px solid #ddd;
  color: #333;
`;
