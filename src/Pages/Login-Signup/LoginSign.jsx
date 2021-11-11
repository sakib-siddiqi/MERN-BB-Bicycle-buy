import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/Firebase/useAuth";
import ButtonC from "../../Shared/Components/Buttons/ButtonC";
import Section from "../../Shared/Components/Section/Section";
import Page from "../../Shared/Page/Page";
import { LoginSignSkeleton } from "../../Shared/Skelaton/SkeletonLoading";
import ProfileCard from "./ProfileCard";
/**
 * *********
 * login from
 * *********
 */
const Login = ({ toggle, firebase, handleSignIn, handleSignOut, redirect }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleSignIn(data, redirect);
    reset();
  };

  return (
    <>
      {firebase.loading ? (
        <LoginSignSkeleton item={2} />
      ) : firebase.user.uid ? (
        <ProfileCard user={firebase.user} handleSignOut={handleSignOut} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="form-label w-100">
            <p>Email</p>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="input-outlined form-control mb-4"
            />
          </label>
          <label htmlFor="password" className="form-label w-100">
            <p>Password</p>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="input-outlined form-control mb-4"
            />
          </label>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && (
            <p className="text-danger">This field is required</p>
          )}

          {firebase.error && <p className="text-danger">{firebase.error}</p>}

          <ButtonC type="submit" className="mb-4 rounded-3">
            Login
          </ButtonC>
          <p onClick={toggle} className="nav-link c-pointer">
            New Here?
          </p>
        </form>
      )}
    </>
  );
};
/**
 * *********
 * Signup from
 * *********
 */
const Signup = ({
  toggle,
  firebase,
  handleSignUp,
  handleSignOut,
  redirect,
}) => {
  const [passNotMatch, setPassNotMatch] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.re_password) {
      handleSignUp(data, redirect);
      setPassNotMatch(false);
    } else {
      setPassNotMatch(true);
    }
  };

  return (
    <>
      {firebase.loading ? (
        <LoginSignSkeleton item={2} />
      ) : firebase.user.uid ? (
        <ProfileCard user={firebase.user} handleSignOut={handleSignOut} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="form-label w-100">
            <p>Name</p>
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", { required: true })}
              className="input-outlined form-control mb-4"
            />
          </label>
          <label htmlFor="email" className="form-label w-100">
            <p>Email</p>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="input-outlined form-control mb-4"
            />
          </label>
          <label htmlFor="password" className="form-label w-100">
            <p>Password</p>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="input-outlined form-control mb-4"
            />
          </label>
          <label htmlFor="re-password" className="form-label w-100">
            <p>Re-enter Password</p>
            <input
              type="password"
              id="re-password"
              placeholder="Re-enter Password"
              {...register("re_password", { required: true })}
              className="input-outlined form-control mb-4"
            />
          </label>

          {/* errors will return when field validation fails  */}
          {(errors.name ||
            errors.password ||
            errors.email ||
            errors.re_password) && (
            <p className="text-danger">This field is required</p>
          )}
          {passNotMatch && (
            <p className="text-danger">* Password not matched</p>
          )}

          <ButtonC type="submit" className="mb-4 rounded-3">
            Signup
          </ButtonC>
          <p onClick={toggle} className="nav-link c-pointer">
            Have an Account?
          </p>
        </form>
      )}
    </>
  );
};

/**
 * +++++++++++
 * Main Login Signup
 * +++++++++++
 */
const LoginSign = () => {
  const location = useLocation();
  const history = useHistory();
  const fromPath = location.state?.from?.pathname;
  const { firebase, handleSignIn, handleSignUp, handleSignOut } = useAuth();
  const [activeLogin, setActiveLogin] = useState(true);
  const redirect = () => history.push(fromPath || "/");
  return (
    <Page>
      <Section className="vh-min-100 my-5 center">
        <Container>
          <Row xs={1} md={2} lg={3} className="justify-content-center">
            <Col>
              <Card className="hoverBlueOutline border-0">
                <Card.Body>
                  <h1 className="text-center fw-bold ls-2">B.B</h1>
                  <p className="text-center text-blue fw-sm">
                    {!firebase.user.uid && (activeLogin ? "Login" : "Signup")}
                  </p>
                  {activeLogin ? (
                    <Login
                      toggle={() => setActiveLogin(false)}
                      firebase={firebase}
                      handleSignOut={handleSignOut}
                      handleSignIn={handleSignIn}
                      redirect={redirect}
                    />
                  ) : (
                    <Signup
                      toggle={() => setActiveLogin(true)}
                      firebase={firebase}
                      handleSignOut={handleSignOut}
                      handleSignUp={handleSignUp}
                      redirect={redirect}
                    />
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
    </Page>
  );
};

export default LoginSign;
