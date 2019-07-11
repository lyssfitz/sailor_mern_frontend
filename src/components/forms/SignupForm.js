import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { setAuthToken } from "./../../actions";

class SignupForm extends Component {
  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    console.log(email, password);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label>Email</label>
          <Field name="email" component="input" type="email" />
        </div>

        <div>
          <label>Password</label>
          <Field name="email" component="input" type="password" />
        </div>
        <input type="submit" value="Signup" />
      </form>
    );
  }
}

const WrappedSignupForm = reduxForm({
  form: "signup",
  validate: formValues => {
    const errors = {};

    if (!formValues.email) {
      errors.email = "Email is required";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    }
  }
})(SignupForm);

export default connect(
  null,
  { setAuthToken }
)(WrappedSignupForm);
