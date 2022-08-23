import React from "react";
import styled from "styled-components";
import { Logo } from "../../../images";

const index = () => {
  return (
    <StyledDiv>
      <img src={Logo} />
    </StyledDiv>
  );
};

export default index;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-bottom: 0px !important;
    text-align: center;
    color: #fff !important;
    font-weight: bold !important;
  }
  img {
    height: 30px;
  }
`;
