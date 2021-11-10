import React from "react";
import { Col, Row, Carousel } from "react-bootstrap";
import Section from "../../../Shared/Components/Section/Section";
import image from "../../../images/review.png";

const HomeReview = () => {
  return (
    <Section id="home-overview" className="vh-100 center">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <img src={image} alt="review" className="img-fluid" />
        </Col>
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Section>
  );
};

export default HomeReview;
