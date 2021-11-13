import React, { useEffect, useState } from "react";
import { Col, Row, Carousel, Card } from "react-bootstrap";
import Section from "../../../Shared/Components/Section/Section";
import image from "../../../images/review.png";
import Text from "../../../Shared/Components/Text/Text";
import BBTitle from "../../../Shared/Components/BBTitle/BBTitle";
import axios from "axios";
import Rating from "react-rating";
const HomeReview = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((res) => setReviews(res.data))
      .catch((err) => setError(err.code));
  }, []);
  return (
    <Section id="home-review" className="vh-min-100 my-5 center">
      <div className="text-center">
        <BBTitle>REVIEW</BBTitle>
      </div>
      <Row xs={1} md={2} className="g-4 ">
        <Col>
          <img src={image} alt="review" className="img-fluid outlineed-img" />
        </Col>
        <Col>
          {error ? (
            <h1 className="text-muted">Opps !</h1>
          ) : (
            <Carousel fade indicators={false}>
              {reviews.map((review) => (
                <Carousel.Item className="py-5" key={review._id}>
                  <Row>
                    <Col xs={10} md={8} lg={6} className="mx-auto">
                      <Card className="border-0 carousel-card">
                        <Card.Body className="v-center  justify-content-evenly align-items-start">
                          <Text>{review.review_text}</Text>
                          <Rating
                            readonly
                            initialRating={review.review_star}
                            placeholderSymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="far fa-star"></i>}
                          />
                          <Card.Title className="text-muted">
                            {review.reviewer}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
      </Row>
    </Section>
  );
};

export default HomeReview;
