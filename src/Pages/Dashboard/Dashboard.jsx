import React from "react";
import { Col, Row } from "react-bootstrap";
import DashSideBar from "./DashSideBar";
import "./dashboard.css";
import DashBoarNavbar from "./DashBoarNavbar";
import MyOrders from "./DashPages/UsersPages/MyOrders";
const Dashboard = () => {
  return (
    <Row className="mx-0">
      <Col
        xs={2}
        className="bg-primary vh-100 sticky-top v-center justify-content-between"
      >
        <DashSideBar />
      </Col>
      <Col xs={10} className="p-0">
        <DashBoarNavbar />
        <MyOrders />
      </Col>
    </Row>
  );
};

export default Dashboard;
