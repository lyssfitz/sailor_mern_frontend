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
        // ------- START
        // eventually, with backend, we want to retrieve token from response and pass to setAuthToken:
        // this.props.setAuthToken(response.data.token);
        // but for the meantime, using JSON web server:
        console.log(response);
        this.props.setAuthToken("FAKE TOKEN");
        // ------- END
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