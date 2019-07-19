import React, { Component } from "react";
import { Comment, Tooltip } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

class UserComment extends Component {
  render() {
    const {authorName, content, dateTime} = this.props;
    return (
      <Comment
        author={<h4>{authorName}</h4>}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={dateTime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{dateTime.fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

UserComment.propTypes = {
  authorName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired
};

export default UserComment;