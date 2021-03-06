import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuth from "../../../../Hooks/Firebase/useAuth";
import { TableSkeleton } from "../../../../Shared/Skelaton/SkeletonLoading";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { firebase } = useAuth();
  useEffect(() => {
    axios
      .get("https://protected-caverns-65051.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data.data);
        setError("");
      })
      .catch((err) => setError(err.code));
  }, []);

  function deleteProduct(id) {
    toast
      .promise(
        axios.delete("https://protected-caverns-65051.herokuapp.com/products", {
          data: { productId: id },
          headers: { idToken: `Bearer ${firebase.idToken}` },
        }),
        {
          pending: "Loading...",
          success: `Deleted.`,
          error: "Ops! Try Again",
        }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          const presentProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(presentProducts);
          setError("");
        }
      })
      .catch((err) => setError(err.code));
  }

  return (
    <section>
      <DashTitle bg="#E4FBFF" text="ligth">
        Manage Products
      </DashTitle>
      <DashBoardContent className="my-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>UID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length ? (
              products.map((product, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{product._id}</td>
                  <td>{product.product_name}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <TableSkeleton row={4} col={5} />
            )}
          </tbody>
        </Table>
      </DashBoardContent>
    </section>
  );
};

export default ManageProducts;
