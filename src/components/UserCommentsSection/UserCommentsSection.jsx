import React, { Component } from "react";
import PropTypes from 'prop-types';
import moment from 'moment';

// Custom components
import UserCommentList from '../UserCommentList/UserCommentList';
import UserCommentEditor from '../UserCommentEditor/UserCommentEditor';

class UserCommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.commentList,
      submitting: false,
      value: '',
    }
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            authorName: this.props.authorName,
            content: this.state.value,
            dateTime: moment(),
          },
          ...this.state.comments,
        ],
      });
    }, 500);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div>
        {comments.length > 0 && <UserCommentList userComments={comments}/>}
        <UserCommentEditor
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          submitting={submitting}
          value={value}
          userList={this.props.userList}
        />
      </div>
    );
  }
}

UserCommentsSection.propTypes = {
  authorName: PropTypes.string.isRequired,
  commentList: PropTypes.array.isRequired,
  userList: PropTypes.array.isRequired
};

export default UserCommentsSection;