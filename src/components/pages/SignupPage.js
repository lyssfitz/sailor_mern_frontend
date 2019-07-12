import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import SignupForm from "./../forms/SignupForm";

class SignupPage extends Component {
  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <div>
          <Button type="primary">Register with LinkedIn OAuth</Button>
        </div>
        <SignupForm {...this.props} />
        <div>
          Already a member? <Link to="/login">Log in</Link>
        </div>
      </>
    );
  }
}

export default SignupPage;
