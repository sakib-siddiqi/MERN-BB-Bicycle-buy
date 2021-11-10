import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiFillCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer style={{ background: "#000" }}>
      <Container className="py-4 text-light">
        <Row xs={1} md={2} lg={3}>
          <Col>
            <h1 className="text-light fw-bold">B.B</h1>
            <p className="ls-1">Bicycle Buy.</p>
          </Col>
          <Col>
            <h3 className="text-light fw-bold">Contact Us</h3>
            <div className="mt-3">
              <p className="text-light mb-2">
                <IoCall className="me-2" />
                017999999
              </p>
              <p className="text-light  mb-2">
                <MdMarkEmailUnread className="me-2" />
                sakibsiddiqi15@gmail.com
              </p>
            </div>
          </Col>
          <Col>
            <h3 className="text-light fw-bold">About Us</h3>
            <Row className="g-2 mt-3">
              <Col className=" flex-grow-0">
                <BsFillInfoSquareFill className="h3" />
              </Col>
              <Col className="flex-grow-1">
                <p className="text-light  mb-2">
                  `Bicycle Buy` offers you to get best bicycle for your next
                  tours. have fun !
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <p
          className="text-white p-3 fw-sm text-center mb-0 mt-4"
          style={{ background: "#ffffff10" }}
        >
          <AiFillCopyrightCircle /> All rights are resurved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
