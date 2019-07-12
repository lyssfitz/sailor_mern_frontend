import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { setAuthToken } from "./../../actions";
import LocalAPI from "./../../apis/local";
// import FormInput from "./fields/FormInput";
import { Form, Icon, Button, Input } from "antd";
import MakeField from "./fields/MakeField";

const AInput = MakeField(Input);

class LoginForm extends Component {

  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    
    LocalAPI.post("/auth/login", { email, password })
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
      <Form style={{ padding: "20px 0" }} onSubmit={handleSubmit(this.onFormSubmit)}>

        <div>
          <Field name="email" placeholder="Email" component={AInput} type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Field name="password" placeholder="Password" component={AInput} type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Button htmlType="submit">Sign Up</Button>
        </div>
      
      </Form>
    );
  }
}

const WrappedLoginForm = reduxForm({
  form: "login",
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
})(LoginForm);


export default connect(
  null,
  { setAuthToken }
)(WrappedLoginForm);