import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoGridSharp } from "react-icons/io5";
import useAuth from "../../Hooks/Firebase/useAuth";
import { BiUserPin } from "react-icons/bi";
const DashBoarNavbar = () => {
  const { firebase } = useAuth();
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
            <Nav.Item className="bg-light rounded-3 text-center">
              <Nav.Link as={NavLink} to="/login-signup">
                <BiUserPin /> {firebase.user.displayName}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashBoarNavbar;
