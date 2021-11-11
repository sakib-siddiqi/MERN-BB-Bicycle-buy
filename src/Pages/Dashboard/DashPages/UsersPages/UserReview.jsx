import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ButtonC from "../../../../Shared/Components/Buttons/ButtonC";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";

const UserReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
                      value="Sakib Siddiqi Supto"
                      disabled
                      className="input-outlined form-control mb-4"
                    />
                  </label>
                  <label htmlFor="password" className="form-label w-100">
                    <p>Review</p>
                    <textarea
                      rows={5}
                      placeholder="Review"
                      {...register("password", { required: true })}
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
      </DashBoardContent>
    </section>
  );
};

export default UserReview;
