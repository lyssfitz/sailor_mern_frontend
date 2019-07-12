import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { setAuthToken } from "./../../actions";
import LocalAPI from "./../../apis/local";
// import FormInput from "./fields/FormInput";
import { Form, Icon, Button, Input } from "antd";
import MakeField from "./fields/MakeField";

const AInput = MakeField(Input);

class SignupForm extends Component {

  onFormSubmit = async formValues => {
    const { firstName, lastName, email, password } = formValues;
    
    LocalAPI.post("/auth/register", { firstName, lastName, email, password })
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
      <Form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label>First Name *</label>
          <Field name="firstName" component={AInput} type="text"  />
        </div>

        <div>
          <label>Last Name *</label>
          <Field name="lastName" component={AInput} type="text" />
        </div>

        <div>
          <label>Email *</label>
          <Field name="email" component={AInput} type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <label>Password *</label>
          <Field name="password" component={AInput} type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>
        <Button htmlType="submit">Sign Up</Button>
      </Form>
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

    if (!formValues.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
    }

    return errors;
  }
})(SignupForm);


export default connect(
  null,
  { setAuthToken }
)(WrappedSignupForm);