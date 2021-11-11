import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoGridSharp } from "react-icons/io5";
const DashBoarNavbar = () => {
  return (
    <Navbar bg="primary" expand="lg" className="dash-nav-bar sticky-top">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto text-light"
        >
          <IoGridSharp />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              exact
              to="/"
              className="px-3 fw-sm mx-0 mx-md-2 my-2 my-md-0"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/shop"
              className="px-3 fw-sm mx-0 mx-md-2 my-2 my-md-0"
            >
              Shop
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashBoarNavbar;
