import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ButtonC from "../../../../Shared/Components/Buttons/ButtonC";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";
import useAuth from "../../../../Hooks/Firebase/useAuth";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const { firebase } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const productData = {
      ...data,
      route: data.product_name.split(" ").join("-").toLowerCase(),
    };
    toast.promise(
      axios.post("http://localhost:5000/products", {
        data: { productData },
        headers: { idToken: `Bearer ${firebase.idToken}` },
      }),
      {
        pending: "Loading...",
        success: `Done`,
        error: "Ops! Try Again",
      }
    );
  };
  return (
    <section>
      <DashTitle bg="#FF00E440" text="dark">
        Add Products
      </DashTitle>
      <DashBoardContent className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <Card className="hoverBlueOutline border-0">
              <Card.Body>
                <h1 className="text-center fw-bold ls-2">B.B</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="product-name" className="form-label w-100">
                    <p>Product Name</p>
                    <input
                      type="text"
                      id="product-name"
                      placeholder="Product Title"
                      className="input-outlined form-control mb-4"
                      {...register("product_name", { required: true })}
                    />
                  </label>
                  <label htmlFor="product-details" className="form-label w-100">
                    <p>Product Details</p>
                    <textarea
                      rows={4}
                      id="product-details"
                      placeholder="Product Details"
                      {...register("details", { required: true })}
                      className="input-outlined form-control mb-4"
                    ></textarea>
                  </label>
                  <label htmlFor="price" className="form-label w-100">
                    <p>Price</p>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      min={1}
                      defaultValue={1}
                      placeholder="Price"
                      {...register("price", { required: true })}
                      className="input-outlined form-control mb-4"
                    />
                  </label>
                  <label htmlFor="img-link" className="form-label w-100">
                    <p>Image Link</p>
                    <input
                      type="url"
                      name="img-link"
                      id="img-link"
                      placeholder="Image Link"
                      {...register("img_link", { required: true })}
                      className="input-outlined form-control mb-4"
                    />
                  </label>
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <p className="text-danger">This field is required</p>
                  )}

                  <ButtonC type="submit" className="mb-4 rounded-3">
                    Add
                  </ButtonC>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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

export default AddProduct;
