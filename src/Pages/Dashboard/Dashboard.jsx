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
import MakeAdmin from "./DashPages/Admin/MakeAdmin";
import ManageProducts from "./DashPages/Admin/ManageProducts";
import { Switch } from "react-router-dom";
import useAuth from "../../Hooks/Firebase/useAuth";
import UserPrivateRoute from "../../Shared/PrivateRoutes/UserPrivateRoute";
import AdminPrivateRoute from "../../Shared/PrivateRoutes/AdminPrivateRoute";
const Dashboard = () => {
  const { firebase, handleSignOut } = useAuth();
  return (
    <Row className="mx-0">
      <Col
        xs={2}
        className="bg-primary px-1 px-md-2 vh-100 sticky-top v-center justify-content-between"
      >
        <DashSideBar handleSignOut={handleSignOut} />
      </Col>
      <Col xs={10} className="p-0">
        <DashBoarNavbar />
        <>
          <Switch>
            {firebase.isAdmin ? (
              <>
                <AdminPrivateRoute
                  exact
                  path="/dashboard"
                  component={AllOrders}
                />
                <AdminPrivateRoute
                  path="/dashboard/admin/products"
                  component={ManageProducts}
                />
                <AdminPrivateRoute
                  path="/dashboard/admin/add-product"
                  component={AddProduct}
                />
                <AdminPrivateRoute
                  path="/dashboard/admin/users"
                  component={MakeAdmin}
                />
              </>
            ) : (
              <>
                <UserPrivateRoute exact path="/dashboard">
                  <MyOrders />
                </UserPrivateRoute>
                <UserPrivateRoute path="/dashboard/review">
                  <UserReview />
                </UserPrivateRoute>
                <UserPrivateRoute path="/dashboard/payment">
                  <Payment />
                </UserPrivateRoute>
              </>
            )}
          </Switch>
        </>
      </Col>
    </Row>
  );
};

export default Dashboard;
