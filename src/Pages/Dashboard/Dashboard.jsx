import React from "react";
import { Col, Row } from "react-bootstrap";
import DashSideBar from "./DashSideBar";
import "./dashboard.css";
import DashBoarNavbar from "./DashBoarNavbar";
import MyOrders from "./DashPages/UsersPages/MyOrders";
import UserReview from "./DashPages/UsersPages/UserReview";
import Payment from "./DashPages/UsersPages/Payment";
import AllOrders from "./DashPages/Admin/AllOrders";
import AddProduct from "./DashPages/Admin/AddProduct";
const Dashboard = () => {
  return (
    <Row className="mx-0">
      <Col
        xs={2}
        className="bg-primary px-1 px-md-2 vh-100 sticky-top v-center justify-content-between"
      >
        <DashSideBar />
      </Col>
      <Col xs={10} className="p-0">
        <DashBoarNavbar />
        <AddProduct />
      </Col>
    </Row>
  );
};

export default Dashboard;
