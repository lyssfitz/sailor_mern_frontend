import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import history from "./../history";
import PrivateRoute from "./PrivateRoute"
import FeedPage from "./pages/FeedPage";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/feed" component={FeedPage} />
        </Switch>
      </Router>
    );
  }
}
// testing

export default App;