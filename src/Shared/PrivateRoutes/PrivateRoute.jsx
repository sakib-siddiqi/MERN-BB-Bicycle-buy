import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/Firebase/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { firebase } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        firebase.user.uid ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login-signup", state: { from: location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
