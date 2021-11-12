import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthCotext from "./Context/AuthCotext";
import useFirebase from "./Hooks/Firebase/useFirebase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import LoginSign from "./Pages/Login-Signup/LoginSign";
import Shop from "./Pages/Shop/Shop";
import { SiteSkeleton } from "./Shared/Skelaton/SkeletonLoading";
function App() {

  const { firebase } = useFirebase();

  return (
    <main>
      {
        firebase.loading ?
          <SiteSkeleton />
          : 
            <AuthCotext>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/login-signup" component={LoginSign} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </BrowserRouter>
            </AuthCotext>
      }
    </main>
  );
}
export default App;
