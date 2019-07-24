import React, { Component } from "react";
import PropTypes from 'prop-types';
import Moment from 'moment';

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
    // console.log(this.props.userComments);
    return (
      <List
        className="comment-list"
        header={this.getHeader()}
        itemLayout="horizontal"
        dataSource={userComments}
        renderItem={item => (
          <li>
            <UserComment
              authorFirstName={item.user_metadata.firstName}
              authorLastName={item.user_metadata.lastName}
              content={item.body}
              dateTime={Moment(item.date_posted)}
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