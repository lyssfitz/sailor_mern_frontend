import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./../forms/LoginForm";
import { Button } from "antd";

class LoginPage extends Component {
  render() {
    return (
      <>
        <h1>Welcome Back</h1>
        <div>
          <Button type="primary">Login with LinkedIn OAuth</Button>
        </div>
        <LoginForm {...this.props} />
        <div>
          New user? <Link to="/signup">Sign Up</Link>
        </div>
      </>
    );
  }
}

export default LoginPage;
