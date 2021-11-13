import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Page from "../../Shared/Page/Page";
import PageHeader from "../../Shared/Page/PageHeader";
import { ProductsSkeleton } from "../../Shared/Skelaton/SkeletonLoading";
import ProductCard from "./ProductCard";
const Shop = () => {
  const [shopProducts, setShopProducts] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setShopProducts(res.data);
        setError("");
      })
      .catch((err) => setError(err.code));
  }, []);
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
          {shopProducts.count || `...`} Bicycle
        </p>
      </PageHeader>
      {error && <Alert variant="danger">{error}</Alert>}
      <Container className="my-5">
        {shopProducts?.count ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {shopProducts?.data?.map((productData) => (
              <Col key={productData._id}>
                <ProductCard data={productData} />
              </Col>
            ))}
          </Row>
        ) : (
          <ProductsSkeleton count={10} />
        )}
      </Container>
    </Page>
  );
};

export default Shop;
