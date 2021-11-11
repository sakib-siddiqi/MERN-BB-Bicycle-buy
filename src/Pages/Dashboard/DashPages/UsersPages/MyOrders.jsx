import React from "react";
import { Table } from "react-bootstrap";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";

const MyOrders = () => {
  return (
    <section>
      <DashTitle bg="#0d6efd30" text="dark">
        My Orders
      </DashTitle>
      <DashBoardContent className="my-4">
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </DashBoardContent>
    </section>
  );
};

export default MyOrders;
