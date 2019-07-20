import React, { Component } from "react";
import PropTypes from 'prop-types';

// Ant.d components
import { Form, Button, Input } from 'antd';

const { TextArea } = Input;

class UserCommentEditor extends Component {
  render() {
    const { onChange, onSubmit, submitting, value } = this.props
    return (
      <div>
        <Form.Item>
          <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Add Comment
          </Button>
        </Form.Item>
      </div>
    );
  }
}

UserCommentEditor.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  value: PropTypes.string
};

export default UserCommentEditor;