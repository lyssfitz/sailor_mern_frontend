import React, { Component } from "react";
import PropTypes from 'prop-types';

// Ant.d components
import {Form, Button, Mentions} from 'antd';

const { Option } = Mentions;

class UserCommentEditor extends Component {
  render() {
    const { onChange, onSubmit, submitting, userList } = this.props;
    return (
      <div>
        <Form.Item>
          <Mentions
            onChange={onChange}
            style={{ width: '100%' }}
            rows="4"
          >
            {userList && userList.map((user, index) => <Option key={index} value={user}>{user}</Option>)}
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
  userList: PropTypes.array
};

export default UserCommentEditor;