import React, { Component } from "react";
import PropTypes from 'prop-types';

// Ant.d components
import {Form, Button, Mentions} from 'antd';

const { Option } = Mentions;

class UserCommentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    }
  }

  handleChange = value => {
    this.setState({value: value,});
    this.props.onChange(value);
  };

  handleSubmit = () => {
    this.setState({value: '',});
    this.props.onSubmit();
  };

  render() {
    const { submitting, userList } = this.props;
    return (
      <div>
        <Form.Item>
          <Mentions
            value={this.state.value}
            onChange={this.handleChange}
            style={{ width: '100%' }}
            rows="4"
          >
            {userList && userList.map((user, index) => <Option key={index} value={user}>{user}</Option>)}
          </Mentions>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={this.handleSubmit} type="primary">
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
  userList: PropTypes.array,
  value: PropTypes.string
};

UserCommentEditor.defaultProps = {
  value: ''
};

export default UserCommentEditor;