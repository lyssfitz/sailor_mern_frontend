import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./../forms/LoginForm";
// import "antd/dist/antd.css";
import styled from "styled-components";
import LinkedinButton from "./LinkedinButton";

const Login = styled.section`
  max-width: 400px;
  margin: auto;
  text-align: center;
`;


class LoginPage extends Component {
  render() {
    return (
      <Login>
        <h1>Welcome Back</h1>
        <div>
          <LinkedinButton />
        </div>
        <LoginForm {...this.props} />
        <div>
          New user? <Link to="/signup">Sign Up</Link>
        </div>
      </Login>
    );
  }
}

export default LoginPage;
