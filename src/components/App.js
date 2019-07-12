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

const MainContent = styled(Content)`
  background: #FFF;
`;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Router history={history}>
          <AppHeader />
          <Switch>
            <MainContent style={{ padding: '50px 50px' }}>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/login" component={LoginPage} />
              <PrivateRoute exact path="/feed" component={FeedPage} />
            </MainContent>
          </Switch>
          <AppFooter />
        </Router>
      </Layout>
    );
  }
}

export default App;