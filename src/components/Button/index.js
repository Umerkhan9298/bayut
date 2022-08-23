import react, { Children } from "react";
import { Button } from "antd";
import styled from "styled-components";

const CustomButton = ({ children, onClick, className }) => (
  <StyledButton className={className} onClick={onClick}>
    {children}
  </StyledButton>
);

export default CustomButton;

const StyledButton = styled(Button)`
  width: 100% !important;
  border: none !important;
  border-radius: 6px !important;
  height: 40px;
`;
