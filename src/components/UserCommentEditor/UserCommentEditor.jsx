import React, { Component } from "react";
import PropTypes from 'prop-types';
// import debounce from 'lodash/debounce';

// Ant.d components
import {Form, Button, Mentions} from 'antd';

// const { Option } = Mentions;

class UserCommentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      loading: false,
      // search: '',
      // users: [],
    };

    // this.loadGithubUsers = debounce(this.loadGithubUsers, 800);
  }

  // loadGithubUsers(key) {
  //   if (!key) {
  //     this.setState({
  //       users: [],
  //     });
  //     return;
  //   }

  //   fetch(`https://api.github.com/search/users?q=${key}`)
  //     .then(res => res.json())
  //     .then(({ items = [] }) => {
  //       const { search } = this.state;
  //       if (search !== key) return;

  //       this.setState({
  //         users: items.slice(0, 10),
  //         loading: false,
  //       });
  //     });
  // }

  // handleSearch = search => {
  //   this.setState({ search, loading: !!search, users: [] });
  //   console.log('Search:', search);
  //   this.loadGithubUsers(search);
  // };

  handleChange = value => {
    this.setState({value: value,});
    this.props.onChange(value);
  };

  handleSubmit = () => {
    this.setState({value: '',});
    this.props.onSubmit();
  };

  render() {
    // console.log(this.state.users);
    const { submitting } = this.props;
    const { loading, value } = this.state;
    return (
      <div>
        <Form.Item>
          <Mentions
            value={value}
            onChange={this.handleChange}
            // onSearch={this.handleSearch}
            loading={loading}
            style={{ width: '100%' }}
            rows="4"
          >
            {/* {users && users.map(({ login }) => <Option key={login} value={login}>{login}</Option>)} */}
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