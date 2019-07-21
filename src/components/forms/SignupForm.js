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
    
    LocalAPI.post("/auth/signup", { firstName, lastName, email, password })
      .then(response => {
        // currently response.data.token is faked from json server
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/feed");
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/signup");
      });
  };



  render() {
    const { handleSubmit } = this.props;

    return (
      <Form style={{ padding: "20px 0" }} onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <Field style={{margin: "5px 0"}} size="large" placeholder="First Name" name="firstName" component={AInput} type="text"  />
        </div>

        <div>
          <Field style={{ margin: "5px 0"}} size="large" placeholder="Last Name" name="lastName" component={AInput} type="text" />
        </div>

        <div>
          <Field style={{ margin: "5px 0"}} size="large" placeholder="Email" name="email" component={AInput} type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Field style={{margin: "5p 0"}} size="large" placeholder="Password" name="password" component={AInput} type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Field style={{ margin: "5px 0"}} size="large" placeholder="Confirm Password" name="passwordConfirmation" component={AInput} type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Button size="large" htmlType="submit">Sign Up</Button>
        </div>
      </Form>
    );
  }
}
// SubmissionError 
const WrappedSignupForm = reduxForm({
  form: "signup",
  validate: formValues => {
    const errors = {};

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(formValues.email)) {
      errors.email = "Invalid email address";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6 || formValues.password.length > 20) {
      errors.password = "Password must be between 6 and 20 characters";
    } else if (formValues.passwordConfirmation !== formValues.password) {
      errors.passwordConfirmation = "Password must match" ;
    }

    if (!formValues.passwordConfirmation) {
      errors.passwordConfirmation = "Password confirmation is required" ;
    }

    if (!formValues.firstName) {
      errors.firstName = "First Name is required";
    } else if (formValues.firstName.length > 30) {
      errors.firstName = "Please enter less than 30 characters"
    }

    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
    } else if (formValues.lastName.length > 30) {
      errors.lastName = "Please enter less than 30 characters"
    }

    return errors;
  }
})(SignupForm);


export default connect(
  null,
  { setAuthToken }
)(WrappedSignupForm);