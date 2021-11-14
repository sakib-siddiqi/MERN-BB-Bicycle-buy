import axios from "axios";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../../Hooks/Firebase/useAuth";
import ButtonC from "../../../../Shared/Components/Buttons/ButtonC";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";

const UserReview = () => {
  const { firebase } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast
      .promise(
        axios.post("https://protected-caverns-65051.herokuapp.com/reviews", {
          data: { reviewsData: data },
          headers: { idToken: `Bearer ${firebase.idToken}` },
        }),
        {
          pending: "Loading...",
          success: `Done`,
          error: "Ops! Try Again",
        }
      )
      .then((res) => reset());
  };
  return (
    <section>
      <DashTitle bg="#FF00E440" text="dark">
        Write a Review
      </DashTitle>
      <DashBoardContent className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <Card className="hoverBlueOutline border-0">
              <Card.Body>
                <h1 className="text-center fw-bold ls-2">B.B</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="name" className="form-label w-100">
                    <p>Name</p>
                    <input
                      type="text"
                      id="name"
                      value={firebase.user.displayName}
                      {...register("reviewer", { required: true })}
                      readOnly
                      className="input-outlined form-control mb-4"
                    />
                  </label>
                  <label htmlFor="star" className="form-label w-100">
                    <p>Review Out of 5</p>
                    <input
                      type="number"
                      id="star"
                      min={1}
                      max={5}
                      defaultValue={1}
                      {...register("review_star", { required: true })}
                      className="input-outlined form-control mb-4"
                    />
                  </label>
                  <label htmlFor="password" className="form-label w-100">
                    <p>Review</p>
                    <textarea
                      rows={5}
                      placeholder="Review"
                      {...register("review_text", { required: true })}
                      className="input-outlined form-control mb-4"
                    ></textarea>
                  </label>
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <p className="text-danger">This field is required</p>
                  )}

                  <ButtonC type="submit" className="mb-4 rounded-3">
                    Send
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

export default UserReview;
