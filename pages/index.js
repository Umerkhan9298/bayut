import React, { useLayoutEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";

//actions
import { layoutChange } from "../src/redux/actions";

//next.config
import { brand } from "../next.config";

// components
import Hero from "../src/components/Hero";
import ListingCards from "../src/components/Cards/ListingCards";
import { ListingImage1 } from "../images";
import { Col, Row } from "antd";
import DiscoverCard from "../src/components/Cards/DiscoverCard";
import RealEstateMarketCarousal from "../src/components/RealEstateMarketCarousal";

export default function Home() {
  const listingImgArr = [
    {
      img: ListingImage1,
      title: "TruCheck™",
      description: "Filter your results with validated, available listings",
    },
    {
      img: ListingImage1,
      title: "Search 2.0",
      description: "Find homes by commute time",
    },
    {
      img: ListingImage1,
      title: "Map View",
      description: "Search for properties in preferred areas using a map",
    },
  ];

  const RealEstateMarketCarousalData = [
    {
      image: "https://images.bayut.com/thumbnails/259676449-400x300.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      image: "https://images.bayut.com/thumbnails/259676450-400x300.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      image: "https://images.bayut.com/thumbnails/259192448-400x300.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      image: "https://images.bayut.com/thumbnails/259192449-400x300.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      image: "https://images.bayut.com/thumbnails/259676450-400x300.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      image: "https://images.bayut.com/thumbnails/259192449-400x300.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      image: "https://images.bayut.com/thumbnails/259192448-400x300.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>{brand.BRAND}</title>
        <link rel="icon" href="" />
      </Head>
      <body>
        <div>
          <Hero />
        </div>
        {/* listing cards section */}
        <StyledRow>
          {listingImgArr?.map((item, index) => (
            <StyledCol xl={8} lg={8} md={24} sm={24} xs={24}>
              <ListingCards
                title={item?.title}
                description={item?.description}
                image={item?.img}
              />
            </StyledCol>
          ))}
        </StyledRow>
        {/* discover cards section */}
        <StyledDiscoverRow>
          <Col span={24}>
            <DiscoverCard />
          </Col>
        </StyledDiscoverRow>

        <Row>
          <RealEstateMarketCarousal
            RealEstateMarketCarousalData={RealEstateMarketCarousalData}
          />
        </Row>
      </body>
    </div>
  );
}

const StyledCol = styled(Col)``;

const StyledRow = styled(Row)`
  margin-inline: 0px;
  margin-block: 30px;
`;

const StyledDiscoverRow = styled(Row)`
  margin-inline: 1.5%;
`;
