import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { setAuthToken } from "./../../actions";
import LocalAPI from "./../../apis/local";
import { Alert, Form, Icon, Button, Input } from "antd";
import MakeField from "./fields/MakeField";

const AInput = MakeField(Input);

class LoginForm extends Component {

  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    
    await LocalAPI.post("/auth/login", { email, password })
      .then(response => {
        // currently response.data.token is faked from json server
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/feed");
      })
      .catch(error => {
        this.props.history.push("/login");
        throw new SubmissionError({ _error: "Invalid credentials"});
      });
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Form style={{ padding: "20px 0"}} onSubmit={handleSubmit(this.onFormSubmit)}>
        {error && <div style={{ marginBottom: "10px"}}>
            <Alert
            message={error}
            type="error"
          />
          </div>}
        <div>
          <Field style={{margin: "5px 0"}} size="large" name="email" placeholder="Email" component={AInput} type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Field style={{margin: "5px 0"}} size="large" name="password" placeholder="Password" component={AInput} type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </div>

        <div>
          <Button size="large" htmlType="submit">Log In</Button>
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
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(formValues.email)) {
      errors.email = "Invalid email address";
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