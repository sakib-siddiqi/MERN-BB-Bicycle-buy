import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Page from "../../Shared/Page/Page";
import PageHeader from "../../Shared/Page/PageHeader";
import ProductCard from "./ProductCard";
const Shop = () => {
  return (
    <Page>
      <PageHeader
        gradient="#113CFC,#1597E5"
        color="light"
        className="flex-column"
      >
        <h1 className={`text-center fw-bold ls-2 text-light`}>Shop</h1>
        <p
          className={`text-center fw-md ls-2 text-light bg-glass p-2 rounded-3`}
        >
          10 Bicycle
        </p>
      </PageHeader>

      <Container className="my-5">
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
      </Container>
    </Page>
  );
};

export default Shop;
