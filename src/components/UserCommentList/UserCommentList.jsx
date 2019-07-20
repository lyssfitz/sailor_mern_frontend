import React, { Component } from "react";
import PropTypes from 'prop-types';

// Ant.d components
import { List } from 'antd';

// Custom components
import UserComment from 'components/UserComment/UserComment.jsx'

class UserCommentList extends Component {

  getHeader() {
    const { userComments } = this.props;
    if (userComments) {
      if (userComments.length === 1) {
        return `${userComments.length} reply`
      }
      return `${userComments.length} replies`
    }
    return ""
  }

  render() {
    const { userComments } = this.props;
    return (
      <List
        className="comment-list"
        header={this.getHeader()}
        itemLayout="horizontal"
        dataSource={userComments}
        renderItem={item => (
          <li>
            <UserComment
              authorName={item.authorName}
              content={item.content}
              dateTime={item.dateTime}
            />
          </li>
        )}
      />
    )
  }
}

UserCommentList.propTypes = {
  userComments: PropTypes.array.isRequired,
};

export default UserCommentList;