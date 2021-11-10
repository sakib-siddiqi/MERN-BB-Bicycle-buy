import React from "react";
import { Col, Row, Carousel, Card } from "react-bootstrap";
import Section from "../../../Shared/Components/Section/Section";
import image from "../../../images/review.png";
import Text from "../../../Shared/Components/Text/Text";
const HomeReview = () => {
  return (
    <Section id="home-overview" className="vh-100 center">
      <Row xs={1} md={2} className="g-4 center">
        <Col>
          <img src={image} alt="review" className="img-fluid outlineed-img" />
        </Col>
        <Col>
          <Carousel fade indicators={false}>
            <Carousel.Item className="py-5">
              <Row>
                <Col xs={8} md={8} lg={6} className="mx-auto">
                  <Card className="border-0 carousel-card">
                    <Card.Body className="as-1 v-center  justify-content-evenly align-items-start">
                      <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Impedit mollitia soluta voluptas sunt, sapiente
                        modi beatae dignissimos, obcaecati dolore dolores quas
                        asperiores aperiam itaque deserunt?{" "}
                      </Text>
                      <Card.Title className="text-muted">Kabir sing</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="py-5">
              <Row>
                <Col xs={8} md={8} lg={6} className="mx-auto">
                  <Card className="border-0 carousel-card">
                    <Card.Body className="as-1 v-center justify-content-evenly align-items-start">
                      <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laudantium cupiditate eius quam animi asperiores
                        fuga!
                      </Text>
                      <Card.Title className="text-muted">Kabir sing</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Section>
  );
};

export default HomeReview;
