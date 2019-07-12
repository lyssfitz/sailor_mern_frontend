import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import history from "./../history";
import PrivateRoute from "./PrivateRoute"
import FeedPage from "./pages/FeedPage";
import "antd/dist/antd.css";
import { Layout } from 'antd';
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import styled from "styled-components";
const { Content } = Layout;

const GridLayout = styled(Layout)`
  display: grid;
  grid-template-rows: minmax(min-content, max-content) 1fr minmax(min-content, max-content);
  min-height: 100vh;
  background: #FFF;
`;

const GridHeader = styled(AppHeader)`
  grid-row: 1;
`;

const GridContent = styled(Content)`
  background: #FFF;
  grid-row: 2;
  align-self: center;
  padding: 15px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;

const GridFooter = styled(AppFooter)`
  grid-row: 1;
`;

class App extends Component {
  render() {
    return (
      <GridLayout>
        <Router history={history}>
          <GridHeader />
          <Switch>
            <GridContent>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/login" component={LoginPage} />
              <PrivateRoute exact path="/feed" component={FeedPage} />
            </GridContent>
          </Switch>
          <GridFooter />
        </Router>
      </GridLayout>
    );
  }
}

export default App;