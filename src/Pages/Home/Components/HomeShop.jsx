import React, { useEffect, useState } from "react";
import Section from "../../../Shared/Components/Section/Section";
import BBTitle from "../../../Shared/Components/BBTitle/BBTitle";
import { Alert, Col, Row } from "react-bootstrap";
import ProductCard from "../../Shop/ProductCard";
import axios from "axios";
import { ProductsSkeleton } from "../../../Shared/Skelaton/SkeletonLoading";

const HomeShop = () => {
  const [homeProducts, setHomeProducts] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://protected-caverns-65051.herokuapp.com/products")
      .then((res) => {
        setHomeProducts(res.data);
        setError("");
      })
      .catch((err) => setError(err.code));
  }, []);
  return (
    <Section className="vh-min-100 my-5 center">
      <div className="center mb-5">
        <BBTitle>Shop</BBTitle>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      {homeProducts?.count ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {homeProducts?.homeProduct?.map((productData) => (
            <Col key={productData._id}>
              <ProductCard data={productData} />
            </Col>
          ))}
        </Row>
      ) : (
        <ProductsSkeleton count={6} />
      )}
    </Section>
  );
};

export default HomeShop;
