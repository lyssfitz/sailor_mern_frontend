import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./../forms/LoginForm";
import styled from "styled-components";
import LinkedinButton from "./LinkedinButton";

const Login = styled.section`
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

const LoginHeading = styled.h1`
  font-size: 2.7em;
  letter-spacing: -1px;
`;


class LoginPage extends Component {
  render() {
    return (
      <Login>
        <LoginHeading>Welcome Back</LoginHeading>
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
