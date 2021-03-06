import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkaleton = () => {
  return (
    <Card className="border-1">
      <Card.Body>
        <Skeleton height={180} />
        <Skeleton height={40} />
        <Skeleton count={2} />
        <Skeleton height={40} width="50%" />
      </Card.Body>
    </Card>
  );
};

const ProductsSkeleton = ({ count }) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {[...Array(count)].map((e, i) => (
        <Col key={i}>
          <CardSkaleton />
        </Col>
      ))}
    </Row>
  );
};

const LoginSignSkeleton = ({ item }) => {
  return (
    <Card.Body>
      {[...Array(item)].map((e, i) => (
        <div className="mb-3" key={i}>
          <Skeleton height={30} width="35%" className="mb-1" />
          <Skeleton height={50} />
        </div>
      ))}
      <Skeleton
        height={40}
        width="40%"
        className="mt-2"
        highlightColor="#0000ff10"
      />
    </Card.Body>
  );
};
const TableSkeleton = ({ row, col }) => {
  return (
    <>
      {[...Array(row)].map((e, i) => (
        <tr className="mb-3" key={i}>
          {[...Array(col)].map((e, i) => (
            <td key={i}>
              {" "}
              <Skeleton height={30} className="mb-1" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

const SingleProductSkeleton = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Skeleton height="300px" />
        <Skeleton count={3} />
      </Col>
      <Col>
        <Skeleton height={10} />
        <Skeleton height={30} className="mb-3" />
        <Skeleton height={10} />
        <Skeleton height={30} className="mb-3" />
        <Skeleton height={30} width="25%" />
      </Col>
    </Row>
  );
};

const SiteSkeleton = ({ row, col }) => {
  return (
    <Container>
      <Skeleton height="10vh" className="mb-1" />
      <Skeleton height="50vh" className="mb-1" />
      <Row>
        <Col>
          <Skeleton
            height="40vh"
            className="mb-1"
            baseColor="#E6E6E6"
            highlightColor="#90AACB30"
          />
        </Col>
        <Col>
          <Skeleton
            height="40vh"
            className="mb-1"
            baseColor="#E6E6E6"
            highlightColor="#90AACB30"
          />
        </Col>
        <Col>
          <Skeleton
            height="40vh"
            className="mb-1"
            baseColor="#E6E6E6"
            highlightColor="#90AACB30"
          />
        </Col>
      </Row>
    </Container>
  );
};

export {
  CardSkaleton,
  LoginSignSkeleton,
  TableSkeleton,
  SiteSkeleton,
  ProductsSkeleton,
  SingleProductSkeleton
};
