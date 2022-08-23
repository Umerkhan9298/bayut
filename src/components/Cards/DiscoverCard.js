import React from "react";
import styled from "styled-components";

import { Button, Carousel } from "antd";

const DiscoverCard = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "start",
    background: "#364d79",
    paddingInline: 20,
  };
  return (
    <StyledDiv>
      <Carousel autoplay afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            Get a bird's-eye-view of your next home with Floor Plans
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>Discover immersive 360° property tours</h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            Explore your future home with detailed videos
          </h3>
        </div>
      </Carousel>
    </StyledDiv>
  );
};

export default DiscoverCard;

const StyledDiv = styled.div``;
