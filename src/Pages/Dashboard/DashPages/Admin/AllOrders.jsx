
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../../Hooks/Firebase/useAuth";
import { TableSkeleton } from "../../../../Shared/Skelaton/SkeletonLoading";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";

const AllOrders = () => {
  const { firebase } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  const [posted, setPosted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/orders", {
        headers: { idToken: `Bearer ${firebase.idToken}` },
      })
      .then((res) => {
        setAllOrders(res.data);
        setError("");
      })
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  }, [firebase.idToken]);

  function shipOrder(id) {
    toast
      .promise(
        axios.put("http://localhost:5000/orders", {
          data: { orderId: id },
          headers: { idToken: `Bearer ${firebase.idToken}` },
        }),
        {
          pending: "Loading...",
          success: `Done`,
          error: "Ops! Try Again",
        }
      )
      .then((res) => {
        setPosted(res.data.acknowledged);
        setError("");
      })
      .catch((err) => setError(err.code));
  }

  return (
    <section>
      <DashTitle bg="#B980F040" text="dark">
        {allOrders.length} Orders
      </DashTitle>
      <DashBoardContent className="my-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>User</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.length ? (
              allOrders.map((order, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{order.email}</td>
                  <td>
                    <small>{order.title}</small>
                    <hr className="my-1" />
                    <small>{order.productId}</small>
                  </td>
                  <td>{order.price}</td>
                  <td>{order.quantity}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.date}</td>
                  {/* Status */}
                  <td>
                    {order.status === "shipped" || posted ? (
                      <Button size="sm" variant="primary" disabled>
                        Shipped
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => shipOrder(order._id)}
                      >
                        Ship
                      </Button>
                    )}
                  </td>
                </tr>
              ))
            ) : loading ? (
              <TableSkeleton row={4} col={8} />
            ) : (
              <tr>
                <td colSpan="4" className="fw-md ls-1 text-muted">
                  No Order
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {/* alart */}
        <ToastContainer
          position="bottom-center"
          theme="dark"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </DashBoardContent>
    </section>
  );
};

export default AllOrders;
