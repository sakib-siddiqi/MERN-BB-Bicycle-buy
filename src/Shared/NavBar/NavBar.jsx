import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="fixed-top bg-glass shadow-sm py-1">
      <Container>
        <Navbar.Brand as={NavLink} exact to="/">
          <img
            src="./Logo.png"
            alt="B.B"
            className="rounded-3"
            style={{ maxWidth: "35px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="px-3 mx-0 mx-md-2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="px-3 mx-0 mx-md-2" href="#link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
