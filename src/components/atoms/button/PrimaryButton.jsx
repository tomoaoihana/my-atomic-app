import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { buttonText } = props;
  return <SButton>{buttonText}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #333;
`;
