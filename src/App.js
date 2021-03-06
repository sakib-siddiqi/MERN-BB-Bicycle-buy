import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthCotext from "./Context/AuthCotext";
import useFirebase from "./Hooks/Firebase/useFirebase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import LoginSign from "./Pages/Login-Signup/LoginSign";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Pages/Shop/SingleProduct";
import { SiteSkeleton } from "./Shared/Skelaton/SkeletonLoading";
import NotFound from "./Shared/404/NotFound";
import PrivateRoute from "./Shared/PrivateRoutes/PrivateRoute";
import { ToastContainer } from "react-toastify";
function App() {
  const { firebase } = useFirebase();
  return (
    <>
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
      <main>
        {firebase.loading ? (
          <SiteSkeleton />
        ) : (
          <AuthCotext>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
                <PrivateRoute path="/shop/:id">
                  <SingleProduct />
                </PrivateRoute>
                <Route path="/login-signup" component={LoginSign} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="*" component={NotFound} />
              </Switch>
            </BrowserRouter>
          </AuthCotext>
        )}
      </main>
      
    </>
  );
}
export default App;
