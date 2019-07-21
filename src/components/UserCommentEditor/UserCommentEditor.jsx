import React, { Component } from "react";
import PropTypes from 'prop-types';

// Ant.d components
import {Form, Button, Input, Mentions} from 'antd';

const { TextArea } = Input;
const { Option } = Mentions;


class UserCommentEditor extends Component {
  render() {
    const { onChange, onSubmit, submitting, value, users } = this.props;
    return (
      <div>
        <Form.Item>
          <Mentions
            style={{ width: '100%' }}
            // value={value}
            rows="4"
          >
            {users && users.map((user, index) => <Option key={index} value={user}/>)}
          </Mentions>
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
  value: PropTypes.string,
  users: PropTypes.array
};

export default UserCommentEditor;