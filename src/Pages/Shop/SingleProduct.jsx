import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hooks/Firebase/useAuth";
import ButtonC from "../../Shared/Components/Buttons/ButtonC";
import Page from "../../Shared/Page/Page";
import PageHeader from "../../Shared/Page/PageHeader";
import { SingleProductSkeleton } from "../../Shared/Skelaton/SkeletonLoading";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const { firebase } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const orderData = {
      ...data,
      price: product.price,
      totalPrice: product.price * data.quantity,
      title: product.product_name,
      email: firebase.user.email,
      productId: product._id,
      date: new Date().toLocaleDateString(),
      status: "processing...",
    };
    toast
      .promise(
        axios.post("https://protected-caverns-65051.herokuapp.com/orders", {
          data: { orderData },
          headers: { idToken: `Bearer ${firebase.idToken}` },
        }),
        {
          pending: "Loading...",
          success: `Done`,
          error: "Only User Can Order",
        }
      )
      .then((res) => reset());
  };
  useEffect(() => {
    axios
      .get(`https://protected-caverns-65051.herokuapp.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.code));
  }, [id]);

  return (
    <Page>
      <PageHeader
        gradient="#E26A2C,#FF8243"
        color="light"
        className="flex-column"
      >
        <h1 className={`text-center fw-bold ls-2 text-light`}>
          {product.product_name || error}
        </h1>
      </PageHeader>
      <Container className="my-5 ">
        {product._id ? (
          <Row xs={1} md={2} className="g-4">
            <Col>
              <img
                src={product.img_link}
                alt={product.route}
                className="w-100"
              />
              <p className="text-secondary mt-3">{product.details}</p>
              <h3 className="text-dark fw-md">$ {product.price}</h3>
            </Col>
            <Col>
              <Card className="hoverBlueOutline border-0">
                <Card.Body>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="address" className="form-label w-100">
                      <p>Address :</p>
                      <input
                        type="text"
                        id="address"
                        placeholder="Address"
                        className="input-outlined form-control mb-4"
                        {...register("address", { required: true })}
                      />
                    </label>
                    <label htmlFor="quantity" className="form-label w-100">
                      <p>Qunatity :</p>
                      <input
                        type="number"
                        id="quantity"
                        min={1}
                        defaultValue={1}
                        placeholder="Quantity"
                        className="input-outlined form-control mb-4"
                        {...register("quantity", { required: true })}
                      />
                    </label>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                      <p className="text-danger">This field is required</p>
                    )}

                    <ButtonC type="submit" className="mb-4 rounded-3">
                      Place Order
                    </ButtonC>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <SingleProductSkeleton />
        )}
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
      </Container>
    </Page>
  );
};

export default SingleProduct;
