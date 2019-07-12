import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { setAuthToken } from "./../../actions";
import LocalAPI from "./../../apis/local";
import FormInput from "./fields/FormInput";
import { Button } from "antd";


class SignupForm extends Component {

  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    
    LocalAPI.post("/auth/register", { email, password })
      .then(response => {
        // currently response.data.token is faked from json server
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/feed");
      })
      .catch(error => console.log(error));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label>Email</label>
          <Field name="email" component={FormInput} type="email" />
        </div>

        <div>
          <label>Password</label>
          <Field name="password" component={FormInput} type="password" />
        </div>
        <Button htmlType="submit">Sign Up</Button>
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

    return errors;
  }
})(SignupForm);


export default connect(
  null,
  { setAuthToken }
)(WrappedSignupForm);