import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

const ListingCards = ({ image, title, description }) => {
  return (
    <StyledDiv>
      <BgImg>
        <img src={image} />
      </BgImg>
      <ContentDiv>
        <TitleDiv>
          <h1>{title}</h1>
          {title === "Search 2.0" && (
            <NewLabelDiv>
              <h1>NEW</h1>
            </NewLabelDiv>
          )}
        </TitleDiv>
        <p>{`${description}`}</p>
      </ContentDiv>
    </StyledDiv>
  );
};

export default ListingCards;

const StyledDiv = styled.div`
  border-radius: 20px;
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 20px;
`;

const BgImg = styled.div`
  img {
    height: 280px;
    border-radius: 20px;
    object-fit: cover;
  }
  position: absolute;
  z-index: 1;
`;

const ContentDiv = styled.div`
  position: relative;
  z-index: 3;
  height: 280px;
  padding: 20px;
`;

const NewLabelDiv = styled.div`
  h1 {
    background-color: #f73131;
    color: #fff;
    width: 80px;
    padding: 7px 20px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 35px;
    margin-bottom: 0px;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  h1 {
    margin-bottom: 0px;
  }
`;
