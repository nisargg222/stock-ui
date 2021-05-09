import './App.css';
import Signup from "./components/forms/signup";
import Signin from "./components/forms/signin";
import Welcome from "./components/welcome";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Cookies from 'js-cookie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from 'react';

function App() {

  return (
    <div>
        <Router>
          <Routes />
        </Router>
    </div>
  );
}

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/home" component={Home} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedLogin path="/signup" component={Signup} />
      <ProtectedLogin path="/signin" component={Signin} />
      <ProtectedLogin path="/" component={Welcome} />
    </Switch>
  )
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => typeof Cookies.get('user') !== "undefined" ? (
        <Component />
      ) :
        (
          <Redirect to="/signin" />
        )
      }
    />
  )
}

const ProtectedLogin = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => typeof Cookies.get('user') === "undefined" ? (
        <Component />
      ) :
        (
          <Redirect to="/home" />
        )
      }
    />
  )
}
export default App;
