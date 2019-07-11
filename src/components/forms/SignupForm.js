import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { setAuthToken } from "./../../actions";
import LocalAPI from "./../../apis/local";

class SignupForm extends Component {

  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    
    LocalAPI.post("/auth/register", { email, password })
      .then(response => {
        // currently response.data.token is faked from json server
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
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
          <Field name="password" component="input" type="password" />
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