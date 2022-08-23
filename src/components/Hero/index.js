import React, { useState } from "react";
import styled from "styled-components";
import { BackgroundImage, CommuteSearchHomeBanner } from "../../../images";
import {
  Button,
  Col,
  Dropdown,
  Input,
  Menu,
  Radio,
  Row,
  Space,
  Tabs,
  Tag,
} from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import CustomButton from "../Button";

const { Group } = Radio;
const { Search } = Input;

const Hero = () => {
  const [propertyFilter, setPropertyFilter] = useState("property");
  const [rentChangeState, setRentChangeState] = useState("buy");
  const [selectTag, setSelectTag] = useState({ id: 1, name: "Yearly" });
  const [buySelectTag, setBuySelectTag] = useState({ id: 1, name: "All" });

  const onChange = (e) => {
    setPropertyFilter(e.target.value);
  };

  const onRentChange = (e) => {
    setRentChangeState(e.target.value);
  };

  const onSearch = (value) => console.log(value);

  const rentFrequencyArr = [
    { id: 1, name: "Yearly" },
    { id: 2, name: "Monthly" },
    { id: 3, name: "Weekly" },
    { id: 4, name: "Daily" },
    { id: 5, name: "Any" },
  ];

  const buyFrequencyArr = [
    { id: 1, name: "All" },
    { id: 2, name: "Ready" },
    { id: 3, name: "Off-plan" },
  ];

  const handleRentClick = (id) => {
    const filter = rentFrequencyArr?.find((item) => item?.id === id);
    setSelectTag(filter);
  };

  const handleBuyClick = (id) => {
    const filter = buyFrequencyArr?.find((item) => item?.id === id);
    setBuySelectTag(filter);
  };

  const menu = (
    <StyledNotificationMenu>
      <h1>Purpose</h1>
      <Group
        value={rentChangeState}
        onChange={onRentChange}
        style={{
          marginBottom: 16,
        }}
      >
        <Radio.Button value="buy">Buy</Radio.Button>
        <Radio.Button value="rent">Rent</Radio.Button>
      </Group>

      {rentChangeState === "buy" && (
        <>
          <h1>Completion Status</h1>
          {buyFrequencyArr?.map((item, index) => (
            <>
              {item?.id === buySelectTag?.id ? (
                <StyledCheckedTag
                  onClick={() => handleBuyClick(item?.id)}
                  color="success"
                >
                  {item?.name}
                </StyledCheckedTag>
              ) : (
                <StyledCheckedTag1
                  onClick={() => handleBuyClick(item?.id)}
                  color="error"
                >
                  {item?.name}
                </StyledCheckedTag1>
              )}
            </>
          ))}
        </>
      )}
      {rentChangeState === "rent" && (
        <>
          <h1>Rent Frequency</h1>
          {rentFrequencyArr?.map((item, index) => (
            <>
              {item?.id === selectTag?.id ? (
                <StyledCheckedTag
                  onClick={() => handleRentClick(item?.id)}
                  color="success"
                >
                  {item?.name}
                </StyledCheckedTag>
              ) : (
                <StyledCheckedTag1
                  onClick={() => handleRentClick(item?.id)}
                  color="error"
                >
                  {item?.name}
                </StyledCheckedTag1>
              )}
            </>
          ))}
        </>
      )}
      {/* {rentChangeState === "rent" && (
        <>
          <h1>Rent Frequency</h1>
          {rentFrequencyArr?.map((item, index) => (
            <>
              {item?.id === selectTag?.id ? (
                <StyledCheckedTag
                  onClick={() => handleRentClick(item?.id)}
                  color="success"
                >
                  {item?.name}
                </StyledCheckedTag>
              ) : (
                <StyledCheckedTag1
                  onClick={() => handleRentClick(item?.id)}
                  color="error"
                >
                  {item?.name}
                </StyledCheckedTag1>
              )}
            </>
          ))}
        </>
      )} */}
      <FilterButtonRow>
        <ResetButton>RESET</ResetButton>
        <DoneButton>DONE</DoneButton>
      </FilterButtonRow>
    </StyledNotificationMenu>
  );

  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={BackgroundImage} />
      </HeroBg>
      <HeroContent>
        {propertyFilter === "property" && (
          <h1>Search properties for sale and to rent in the UAE</h1>
        )}
        {propertyFilter === "truvalue" && (
          <h1>The UAE's Only Instant Property Valuation Solution!</h1>
        )}
        <SwitchButtonDiv>
          <Group
            value={propertyFilter}
            onChange={onChange}
            style={{
              marginBottom: 16,
            }}
          >
            <Radio.Button value="property">Property search</Radio.Button>
            <Radio.Button value="truvalue">TruValue™</Radio.Button>
          </Group>
        </SwitchButtonDiv>
        <SearchRow>
          <Col xl={18} lg={18} md={24} sm={24} xs={24}>
            <SearchBannerDiv>
              {propertyFilter === "property" && (
                <>
                  <SearchBannerRow gutter={[10, 10]}>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                          className="ant-dropdown-link"
                        >
                          <StyledAnchor onClick={(e) => e.preventDefault()}>
                            Buy
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                      <StyledSearchGoogleApi
                        suffix={<FaMapMarkerAlt />}
                        placeholder="Enter location"
                      />
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                        >
                          <StyledAnchor
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            Residential
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                  </SearchBannerRow>
                  <SearchBannerRow gutter={[10, 10]}>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                          className="ant-dropdown-link"
                        >
                          <StyledAnchor onClick={(e) => e.preventDefault()}>
                            Bed & Baths
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                        >
                          <StyledAnchor
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            Areq (sqft)
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                        >
                          <StyledAnchor
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            Price (AED)
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <CustomButton className={"find_btn"}>Find</CustomButton>
                    </Col>
                  </SearchBannerRow>
                  <Row gutter={[10, 10]}>
                    <Col span={24}>
                      <CommuteSearchHomeBannerDiv>
                        <img src={CommuteSearchHomeBanner} />
                        <p>
                          <BadgeDiv>NEW</BadgeDiv>
                          <b>Search 2.0</b>
                          Find homes by commute time
                          <AiOutlineRight />
                        </p>
                      </CommuteSearchHomeBannerDiv>
                    </Col>
                  </Row>
                </>
              )}
              {propertyFilter === "truvalue" && (
                <>
                  <SearchBannerRow gutter={[10, 10]}>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                          className="ant-dropdown-link"
                        >
                          <StyledAnchor onClick={(e) => e.preventDefault()}>
                            Buy
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                      <StyledSearchGoogleApi
                        suffix={<FaMapMarkerAlt />}
                        placeholder="Enter location"
                      />
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                        >
                          <StyledAnchor
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            Property Type
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                  </SearchBannerRow>
                  <Row gutter={[10, 10]}>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                          className="ant-dropdown-link"
                        >
                          <StyledAnchor onClick={(e) => e.preventDefault()}>
                            Beds
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                        >
                          <StyledAnchor
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            Baths
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <AlignDiv>
                        <StyledDropdown
                          overlay={menu}
                          placement="bottomRight"
                          trigger={["click"]}
                        >
                          <StyledAnchor
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            e.g. 1078 sqft
                          </StyledAnchor>
                        </StyledDropdown>
                        <CaretDownOutlined />
                      </AlignDiv>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                      <CustomButton className={"find_btn"}>
                        Get Estimate
                      </CustomButton>
                    </Col>
                  </Row>
                  <ResetSearchRow>
                    <p>Reset Search</p>
                  </ResetSearchRow>
                </>
              )}
            </SearchBannerDiv>
          </Col>
        </SearchRow>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin: 0 20px;
  border-radius: 10px;
  @media (min-width: 991px) {
    height: 89vh;
  }
  @media only screen and (max-width: 991px) and (min-height: 651px) {
    height: 880px;
  }
  @media (max-height: 650px) {
    height: 1000px;
  }
  position: relative;
  z-index: 1;
  @media (max-width: 991px) {
    justify-content: center;
  }
  .find_btn {
    height: 52px !important;
    background-color: #28b16d !important;
    color: #fff !important;
    font-weight: 700 !important;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  @media (min-width: 991px) {
    height: 89vh;
  }
  @media only screen and (max-width: 991px) and (min-height: 651px) {
    height: 880px;
  }
  @media (max-height: 650px) {
    height: 1000px;
  }
  overflow: hidden;
  // @media screen and (max-height: 484px) {
  //   height: 106vh;
  // }
`;

const ImgBg = styled.img`
  width: 100%;
  @media (min-width: 991px) {
    height: 89vh;
  }
  @media only screen and (max-width: 991px) and (min-height: 651px) {
    height: 880px;
  }
  @media (max-height: 650px) {
    height: 1000px;
  }
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.5;
  // @media screen and (max-height: 484px) {
  //   height: 106vh;
  // }
`;

const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    min-width: 95%;
    align-items: center;
  }
  @media (max-width: 991px) {
    max-width: 100%;
    align-items: center;
  }
  h1 {
    color: #fff !important;
    text-align: center;
  }
`;

const SwitchButtonDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 320px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-radio-group {
    margin-bottom: 0px !important;
    display: flex;
    justify-content: space-between;
    width: 310px;
  }

  .ant-radio-button-wrapper {
    width: 150px !important;
    height: 50px !important;
    text-align: center !important;
    background: none !important;
    color: #fff !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 16px;
    font-weight: 600;
  }
  .ant-radio-button-wrapper-checked {
    width: 150px !important;
    height: 50px !important;
    text-align: center !important;
    background: #fff !important;
    color: #000 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: rgba(0, 0, 0, 0) !important;
  }
`;

const SearchBannerRow = styled(Row)`
  @media (min-width: 992px) {
    margin-bottom: 20px;
  }
  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
`;

const SearchBannerDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  margin-block: 20px;
  padding: 20px;
  border-radius: 10px;

  .ant-radio-group {
    margin-bottom: 0px !important;
  }
`;

const StyledDropdown = styled(Dropdown)`
  a {
    color: #fff !important;
  }
`;

const StyledAnchor = styled.a`
  color: #000 !important;
  width: 100%;
`;

const StyledSearchGoogleApi = styled(Search)`
  .ant-btn {
    display: none !important;
  }
  .ant-input-affix-wrapper {
    padding: 14px;
    border-radius: 10px !important;
  }
`;

const StyledNotificationMenu = styled(Menu)`
  @media (min-width: 992px) {
    width: 250px !important;
    padding: 10px;
    left: 74px;
    top: 20px;
    border-radius: 5px;
    line-height: 28px;
  }
  @media (max-width: 991px) {
    width: 100% !important;
    padding: 10px;
    // left: 74px;
    top: 15px;
    border-radius: 5px;
    line-height: 28px;
  }
  h1 {
    margin-bottom: 0px !important;
    margin-inline: 5px !important;
    color: #000;
    font-size: 16px;
  }
  p {
    margin-bottom: 0px !important;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .ant-dropdown-menu-item {
    margin-block: 5px;
    padding: 10px;
    border-radius: 6px;
  }
  backdrop-filter: blur(20px) !important;
  .ant-dropdown-placement-bottomRight {
    left: 690px !important;
  }
  .ant-radio-group {
    margin-bottom: 5px !important;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
  .ant-radio-button-wrapper {
    width: 125px;
    text-align: center;
    border: none !important;
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: transparent !important;
  }
  .ant-radio-button-wrapper-checked {
    color: #28b16d !important;
    background-color: #e9f7f0 !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: #fff !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
    border-color: transparent !important;
  }
  .ant-radio-button-wrapper:hover {
    color: #000 !important;
  }
`;

const AlignDiv = styled.div`
  display: flex !important;
  align-items: center !important;
  background: #fff !important;
  padding: 15px;
  border-radius: 10px;

  .anticon-caret-down {
    color: #000;
  }
`;

const SearchRow = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CommuteSearchHomeBannerDiv = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  // padding-inline: 20px;

  img {
    position: absolute;
    z-index: 1;
  }
  p {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 3;
    margin-bottom: 0px;
    margin-inline: 16px;
    b {
      margin-inline: 10px;
    }
  }
  svg {
    margin-inline: 10px;
  }
`;

const BadgeDiv = styled.div`
  background-color: #ff4d4f;
  color: #fff;
  padding: 1px 10px 1px 7px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 400;
  width: 40px;
`;

const ResetSearchRow = styled(Row)`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;

  p {
    margin-bottom: 0px;
    color: #fff;
  }
`;

const ResetButton = styled(Button)`
  background-color: #fff;
  color: #006169;
  border-radius: 5px;
  border-color: #006169;
`;

const DoneButton = styled(Button)`
  background-color: #006169;
  color: #fff;
  border-radius: 5px;
`;

const FilterButtonRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .ant-btn {
    width: 112px !important;
  }
`;

const StyledCheckedTag = styled(Tag)`
  padding: 5px;
  border-radius: 10px;
  color: #28b16d !important;
  border-color: #28b16d !important;
  background-color: #e9f7f0 !important;
  margin-bottom: 10px;
  cursor: pointer;
`;

const StyledCheckedTag1 = styled(Tag)`
  padding: 5px;
  border-radius: 10px;
  color: #000 !important;
  border-color: #000 !important;
  background-color: #fff !important;
  margin-bottom: 10px;
  cursor: pointer;
`;
