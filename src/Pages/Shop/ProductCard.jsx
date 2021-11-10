import React from "react";
import { Card } from "react-bootstrap";
import productImg from "../../images/product-1.png";
import ButtonA from "../../Shared/Components/Buttons/ButtonA";
import Text from "../../Shared/Components/Text/Text";
const ProductCard = () => {
  return (
    <Card className="border-0 product-card">
      <Card.Img variant="top" src={productImg} className="rounded-0" />
      <Card.Body>
        <Card.Title className="fw-md ls-1">R.B.C Pro</Card.Title>
        <Card.Text as={Text}>
          This is one of the best bicycle for rider. we have different varient.
        </Card.Text>
        <ButtonA>Buy Now</ButtonA>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
