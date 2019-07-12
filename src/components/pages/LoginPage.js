import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <>
        <h1>Welcome Back</h1>
        <LoginForm {...this.props} />
      </>
    );
  }
}

export default LoginPage;
