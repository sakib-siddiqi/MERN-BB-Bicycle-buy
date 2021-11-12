import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/Firebase/useAuth";

const UserPrivateRoute = ({ children, ...rest }) => {
  const { firebase } = useAuth();
  return (
    <>
    {
     !firebase.loading && <Route
      {...rest}
      render={({ location }) =>
        firebase.user.uid && !firebase.isAdmin ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login-signup", state: { from: location } }}
          />
        )
      }
    />
    }
    </>
  );
};

export default UserPrivateRoute;
