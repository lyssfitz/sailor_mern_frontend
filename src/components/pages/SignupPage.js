import React, { Component } from "react";
import SignupForm from "./../forms/SignupForm";

class SignupPage extends Component {
  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <SignupForm {...this.props} />
      </>
    );
  }
}

export default SignupPage;
