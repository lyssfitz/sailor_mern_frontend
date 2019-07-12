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
      <Form onSubmit={handleSubmit(this.onFormSubmit)}>

        <div>
          <label>Email *</label>
          <Field name="email" component={AInput} type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <label>Password *</label>
          <Field name="password" component={AInput} type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Button htmlType="submit">Sign Up</Button>
        </div>
        
        <div>
          Not a member? <Link to="/signup">Sign Up</Link>
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