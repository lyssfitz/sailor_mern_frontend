import React from "react";
import { Form } from "antd";
// Component/template for creating Ant Design form fields
const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <Form.Item
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </Form.Item>
  );
};

export default makeField;