import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonA from "../../Shared/Components/Buttons/ButtonA";
import Text from "../../Shared/Components/Text/Text";
const ProductCard = ({
  data: { _id, product_name, img_link, route, details },
}) => {
  return (
    <Card className="border-0 product-card">
      <Card.Img variant="top" src={img_link} className="rounded-0" />
      <Card.Body>
        <Card.Title className="fw-md ls-1">{product_name}</Card.Title>
        <Card.Text as={Text}>{details}</Card.Text>
        <Link to={`shop/${_id}`}>
          <ButtonA>Buy Now</ButtonA>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
