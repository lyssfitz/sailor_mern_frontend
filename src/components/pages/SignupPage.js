import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignupForm from "./../forms/SignupForm";
import LinkedinButton from "./LinkedinButton";

const Signup = styled.section`
  text-align: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const SignupHeading = styled.h1`
  font-size: 2.7em;
  letter-spacing: -1px;
`;


const SignupContent = styled.div`
  
  max-width: 400px;
  margin: auto;

  @media (min-width: 768px) {
    grid-column: 1;
    width: 100%;
  }
`; 

const SignupImage = styled.div`
  grid-column: 2;
  background: #EEE;
  margin: 40px;
  border-radius: 20px;
`;

class SignupPage extends Component {
  render() {
    return (
      <Signup>
        <SignupContent>
          <SignupHeading>Sign Up</SignupHeading>
          <div>
            <LinkedinButton />
          </div>
          <SignupForm {...this.props} />
          <div>
            Already a member? <Link to="/login">Log In</Link>
          </div>
        </SignupContent>
        <SignupImage />
      </Signup>
    );
  }
}

export default SignupPage;
