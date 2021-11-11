import React from "react";
import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import {
  BsPencilSquare,
  BsCartCheckFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { RiWallet3Fill, RiListUnordered } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import confirmIt from "../../Shared/Components/Alart_Confirm/confirmIt";

const DashMenuItem = ({ children, to, ...rest }) => {
  return (
    <Nav.Item className="w-100 my-2 bg-glass">
      <Nav.Link
        as={NavLink}
        {...rest}
        to={to}
        className="d-block rounded-1 d-flex justify-content-center justify-content-md-start align-items-center flex-wrap"
      >
        {children[0]}
        <span className="d-none ms-0 ms-sm-2 d-sm-inline-block">
          {children[1]}
        </span>
      </Nav.Link>
    </Nav.Item>
  );
};

/**
 *
 */
const DashSideBar = ({ handleSignOut }) => {
  return (
    <>
      <Nav className="dash-nav">
        <Nav.Item>
          <h1 className="mb-0 fw-bold text-center text-light">B.B</h1>
        </Nav.Item>
        <DashMenuItem exact to="/dashboard">
          <BsCartCheckFill />
          My Orders
        </DashMenuItem>
        <DashMenuItem to="/dashboard/review">
          <BsPencilSquare />
          Review
        </DashMenuItem>
        <DashMenuItem to="/dashboard/payment">
          <RiWallet3Fill />
          Payment
        </DashMenuItem>
        {/* ---------------------------------- */}
        <DashMenuItem exact to="/dashboard">
          <RiListUnordered />
          All Orders
        </DashMenuItem>
        <DashMenuItem exact to="/dashboard/admin/add-product">
          <AiOutlineAppstoreAdd />
          Add Product
        </DashMenuItem>
        <DashMenuItem exact to="/dashboard/admin/users">
          <MdOutlineManageAccounts />
          Users
        </DashMenuItem>
        <DashMenuItem exact to="/dashboard/admin/products">
          <BsGrid3X3GapFill />
          Manage Products
        </DashMenuItem>
      </Nav>
      <Nav.Item
        className="w-100 my-2"
        onClick={() =>
          confirmIt(handleSignOut, {
            text: "You will be Logged Out !",
            confirmButtonText: "Log Out",
          })
        }
      >
        <Button className="w-100 rounded-3 btn-red">
          <span className="d-none d-md-inline-block">Logout</span>
          <IoMdLogOut className="h5 ms-0 ms-md-2 mb-0" />
        </Button>
      </Nav.Item>
    </>
  );
};
export default DashSideBar;
