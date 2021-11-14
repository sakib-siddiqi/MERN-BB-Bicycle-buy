import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Table, Button, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuth from "../../../../Hooks/Firebase/useAuth";
import confirmIt from "../../../../Shared/Components/Alart_Confirm/confirmIt";
import { TableSkeleton } from "../../../../Shared/Skelaton/SkeletonLoading";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";
/**
 * 
 * Single user product
 * 
 */
const MyOrders = () => {
  const { firebase } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://protected-caverns-65051.herokuapp.com/user-orders", {
        headers: { idToken: `Bearer ${firebase.idToken}` },
      })
      .then((res) => {
        setMyOrders(res.data);
        setError("");
      })
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  }, [firebase.idToken]);

  function cancleOrder(orderId) {
    confirmIt(
      () => {
        toast
          .promise(
            axios.delete("https://protected-caverns-65051.herokuapp.com/orders", {
              data: { orderId },
              headers: { idToken: `Bearer ${firebase.idToken}` },
            }),
            {
              pending: "Loading...",
              success: `Done, refresh the page`,
              error: "Ops! Try Again",
            }
          )
          .then((res) => {
            if (res.data.acknowledged) {
              const existedOrders = myOrders.filter(
                (order) => order._id !== orderId
              );
              setMyOrders(existedOrders);
            }
          });
      },
      {
        text: "You want to cancle this order?",
        confirmButtonText: "Yes",
        result: "Order Cancled",
      }
    );
  }

  return (
    <section>
      <DashTitle bg="#0d6efd30" text="dark">
        My Orders
      </DashTitle>
      <DashBoardContent className="my-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr className="table-dark">
              <th>No.</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.length ? (
              myOrders.map((order, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>{order.quantity}</td>
                  <td>{order.totla}</td>
                  <td className="table-info">{order.status}</td>
                  <td className="table-danger">
                    <Button
                      variant="danger"
                      onClick={() => cancleOrder(order._id)}
                    >
                      Cancle
                    </Button>
                  </td>
                </tr>
              ))
            ) : loading ? (
              <TableSkeleton row={4} col={8} />
            ) : (
              <tr>
                <td colSpan="4" className="fw-md ls-1 text-muted">
                  No Data
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

export default MyOrders;
