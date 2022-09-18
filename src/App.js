import React from "react";
import { Box } from "@material-ui/core";
import AdminSignup from "./components/Admin/AdminSignup";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import AdminDashBoard from "./components/Admin/AdminDashBoard";
import LandingPage from "./LandingPage";
import ClientDashBoard from "./components/Client/ClientDashBoard";
import ClientLogin from "./components/Client/ClientLogin";
import ClientSignup from "./components/Client/ClientSignUp"

export default () => {
  return (

    <AuthProvider>
      <Box >
        <div >
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <PrivateRoute exact path="/" component={LandingPage} />
              < Route path="/signup" component={AdminSignup} />
              < Route path="/login" component={AdminLogin} />
              <Route path="/userlogin" component={ClientLogin} />
              <Route path="/home" component={AdminDashBoard} />
              <PrivateRoute exact path="/" component={LandingPage} />
              <Route path="/userDashBoard" component={ClientDashBoard} />
              <Route path="/usersignup" component={ClientSignup} />
            </Switch>
          </BrowserRouter>
        </div >
      </Box>

    </AuthProvider>
  )
  
};
