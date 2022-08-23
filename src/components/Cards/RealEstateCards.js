import React from "react";
import { Card, Col, Row, Rate, Badge } from "antd";
import styled from "styled-components";

const RealEstateCard = ({ Image, Description }) => {
  return (
    <StyledCardsDiv>
      <>
        <Card hoverable cover={<img alt="example" src={Image} />}>
          <Row>
            <Col span={24}>
              <StyledCardsP>{Description}</StyledCardsP>
            </Col>
          </Row>
        </Card>
      </>
    </StyledCardsDiv>
  );
};

export default RealEstateCard;

const StyledCardsDiv = styled.div`
  .ant-card-cover img {
    border-radius: 15px 15px 0 0 !important;
    height: 200px !important;
    width: 100% !important;
  }
  .ant-card-bordered {
    border-radius: 15px !important;
  }
  .ant-card-body {
    padding: 14px !important;
  }
  .ant-rate {
    color: #f8d727 !important;
    font-size: 15px !important;
  }
  .ant-btn: hover;
`;

const StyledCardsP = styled.p`
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 992px) {
    width: 300px;
  }
  @media (max-width: 991px) {
    width: 200px;
  }
`;
