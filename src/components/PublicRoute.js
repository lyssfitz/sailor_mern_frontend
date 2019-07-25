import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Redirect to feed if token exists and not to landing page
const PublicRoute = (props) => {
  const { component: Component, token, ...rest } = props;

  return (
    <Route {...rest}
      render={(props) => {
        if (token) {
          return <Redirect to="/feed" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
};

export default connect(mapStateToProps)(PublicRoute);