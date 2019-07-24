import "antd/dist/antd.css";
import "./../assets/style.css"
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import OAuthPage from "./pages/OAuthPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage"
import CategoryPage from "./pages/CategoryPage"
import history from "./../history";
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import FeedPage from "./pages/FeedPage";
import ArticlePage from "./pages/ArticlePage"
import HelpPage from "./pages/info/HelpPage";
import InfoPage from "./pages/info/InfoPage";
import AboutUsPage from "./pages/info/AboutUsPage"
import PrivacyPage from "./pages/info/PrivacyPage";
import TermsPage from "./pages/info/TermsPage";
import NotificationsPage from "./pages/NotificationsPage";
import { Layout } from 'antd';
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import styled from "styled-components";
import { fetchCurrentUser } from "./../actions"
// import UserCommentsPage from "./pages/UserCommentsPage";

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
  componentDidMount = () => {
    const { fetchCurrentUser, token } = this.props;

    if (token) {
      fetchCurrentUser();
    }
  }

  render(props) {

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
                {/* ---- */}
                {/* ENABLE WHEN BACKEND IN USE */}
                <PrivateRoute exact path="/feed" component={FeedPage} />
                <PrivateRoute exact path="/feed/:interest" component={CategoryPage} />
                <PrivateRoute exact path="/article/:id" component={ArticlePage} />
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <PrivateRoute exact path="/notifications" component={NotificationsPage} />
                {/* <PublicRoute exact path="/user-comments" component={UserCommentsPage} /> */}
                {/* ---- */}
                <Route exact path="/info" render={routeProps => (
                  <InfoPage heading="About Us">
                    <AboutUsPage {...routeProps}/>
                  </InfoPage>
                )}/>
                <Route exact path="/help" render={routeProps => (
                  <InfoPage heading="Help">
                    <HelpPage {...routeProps}/>
                  </InfoPage>
                )}/>
                <Route exact path="/terms" render={routeProps => (
                  <InfoPage heading="Terms & Conditions">
                    <TermsPage {...routeProps}/>
                  </InfoPage>
                )}/>
                <Route exact path="/privacy" render={routeProps => (
                  <InfoPage heading="Privacy Policy">
                    <PrivacyPage {...routeProps}/>
                  </InfoPage>
                )}/>
              </Switch>
            </GridContent>
          <GridFooter />
        </Router>
      </GridLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.user.user
  }
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);