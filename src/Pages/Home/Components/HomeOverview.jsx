import React from "react";
import { Col, Row } from "react-bootstrap";
import Section from "../../../Shared/Components/Section/Section";
import Text from "../../../Shared/Components/Text/Text";
import overview from "../../../images/over-view.png";
import ButtonA from "../../../Shared/Components/Buttons/ButtonA";
const HomeOverview = () => {
  return (
    <Section id="home-overview" className="vh-min-100 my-5 center">
      <Row xs={1} className="g-4 mt-5">
        <Col md={8}>
          <div className="mt-3 mt-md-4 mt-lg-5">
            <div className="display-4 fw-bold">RIde With Your Bicycle.</div>
            <Col xs={12} md={6}>
              <Text className="mt-3 mb-4">
                Get your dream bicycle in this winter. And go to see your dream.
                Start Your Journey with B.B
              </Text>
            </Col>
            <ButtonA>GO & GET</ButtonA>
            <div className="display-5 mt-3 mt-md-4 mt-md-5 fw-md text-dark">
              Winter Offer Going on!
            </div>
          </div>
        </Col>
        <Col md={4} className="center">
          <img src={overview} alt="overview" className="img-fluid" />
        </Col>
      </Row>
    </Section>
  );
};

export default HomeOverview;
