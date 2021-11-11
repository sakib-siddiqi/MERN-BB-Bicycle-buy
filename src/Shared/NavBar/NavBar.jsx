import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoGridSharp } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri"
import useAuth from "../../Hooks/Firebase/useAuth";
import confirmIt from "../Components/Alart_Confirm/confirmIt";

const NavItem = ({ children, ...rest }) => {
  return (
    <Nav.Link
      {...rest}
      as={NavLink}
      className="px-3 fw-sm mx-0 mx-md-2 my-2 my-md-0"
    >
      {children}
    </Nav.Link>
  )
}


const NavBar = () => {

  const { firebase, handleSignOut } = useAuth();

  const btnClasses = "px-3 fw-sm mx-0 mx-md-2 my-2 my-md-0 btn-blue center";

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
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <IoGridSharp />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  nav-bar-main">
            <NavItem as={NavLink} exact to="/"> Home </NavItem>
            <NavItem as={NavLink} to="/shop"> Shop </NavItem>
            <NavItem as={NavLink} to="/dashboard"> Dashboard </NavItem>

            {
              firebase.user.uid ?
                <Nav.Link id="buttonC" className={btnClasses} onClick={() => confirmIt(handleSignOut)}>
                  <RiLogoutCircleRFill />
                </Nav.Link>
                : <Nav.Link id="buttonC" as={NavLink} className={btnClasses} to="/login-signup">
                  Login
                </Nav.Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
