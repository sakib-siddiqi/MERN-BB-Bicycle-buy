import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Page from "../Page/Page";
import image from "../../images/404.jpg";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <Page>
      <Container className="my-5 py-5">
        <Row xs={1} className="g-4 flex-column-reverse flex-md-row" >
          <Col md={4}>
            <img src={image} alt="404" className="img-fluid outline-1" />
          </Col>
        <Col md={8} className="text-center text-md-start">
        <h1 className="display-4 fw-md mb-4" style={{color:"#ff000080"}}>404...</h1>
        <h1 className="display-6 fw-md mb-4" style={{color:"#00000020"}}>Page Not Found !</h1>
        <NavLink className="btn btn-primary btn-lg" to="/" exact>Back to Home</NavLink>
        </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default NotFound;
