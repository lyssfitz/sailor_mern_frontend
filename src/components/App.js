import "antd/dist/antd.css";
import "./../assets/style.css"
import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import OAuthPage from "./pages/OAuthPage";
import LandingPage from "./pages/LandingPage";
import history from "./../history";
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import FeedPage from "./pages/FeedPage";
import ArticlePage from "./pages/ArticlePage"
import { Layout } from 'antd';
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import styled from "styled-components";
import ProfilePage from "./pages/ProfilePage";
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
            <GridContent>
              <Switch>
                <PublicRoute exact path="/" component={LandingPage} />
                <PublicRoute exact path="/signup" component={SignupPage} />
                <PublicRoute exact path="/login" component={LoginPage} />
                <PublicRoute exact path="/oauth" component={OAuthPage} />
                {/* DISABLE WHEN BACKEND NOT IN USE - TESTING */}
                {/* <PublicRoute exact path="/feed" component={FeedPage} />
                <PublicRoute exact path="/article/:id" component={ArticlePage} /> */}
                {/* ENABLE WHEN BACKEND IN USE */}
                <PrivateRoute exact path="/feed" component={FeedPage} />
                <PrivateRoute exact path="/profile" component={ProfilePage} />
              </Switch>
            </GridContent>
          <GridFooter />
        </Router>
      </GridLayout>
    );
  }
}

export default App;