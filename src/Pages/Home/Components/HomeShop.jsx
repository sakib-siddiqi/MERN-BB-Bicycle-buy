import React from "react";
import Section from "../../../Shared/Components/Section/Section";
import BBTitle from "../../../Shared/Components/BBTitle/BBTitle";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../Shop/ProductCard";

const HomeShop = () => {
  return (
    <Section className="vh-min-100 my-5 center">
      <div className="center mb-5">
        <BBTitle>Shop</BBTitle>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
      </Row>
    </Section>
  );
};

export default HomeShop;
