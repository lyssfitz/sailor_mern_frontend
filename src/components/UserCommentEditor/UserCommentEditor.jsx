import React, { Component } from "react";
import PropTypes from 'prop-types';
import LocalAPI from "./../../apis/local"
// import debounce from 'lodash/debounce';

// Ant.d components
import {Form, Button, Mentions} from 'antd';

const { Option } = Mentions;

class UserCommentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      loading: false,
      search: '',
      users: [],
      tagged: []
    };

  }

  componentDidMount = () => {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const articleId = this.props.articleId
    await LocalAPI.get(`article/${articleId}/comment`)
      .then(response => this.setState({ users: response.data.filteredUsers }))
      .catch(error => console.log(error))
  }

  handleOnSelect = (selected) => {
    const { tagged } = this.state;
    const { user } = this.props;
    const taggedUserEmail = selected.value;
    if (tagged.includes(taggedUserEmail) || user.email === taggedUserEmail) {
      return;
    }

    return this.setState({ tagged: [...tagged, taggedUserEmail] });
  }


  handleChange = value => {
    this.setState({value: value,});
    this.props.onChange(value);
  };

  handleSubmit = () => {
    this.setState({value: '',});
    this.props.onSubmit(this.state.tagged);
  };

  render() {
    const { submitting } = this.props;
    const { loading, value, users } = this.state;
    return (
      <div>
        <Form.Item>
          <Mentions
            value={value}
            onChange={this.handleChange}
            onSelect={this.handleOnSelect}
            loading={loading}
            style={{ width: '100%', lineHeight: "1.3em", padding: "7px 0" }}
            rows="4"
          >
            {users && users.map(({ email, firstName, lastName }) => <Option key={email} value={email}>{firstName.charAt(0).toUpperCase() + firstName.slice(1)} {lastName.charAt(0).toUpperCase() + lastName.slice(1)}</Option>)}
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