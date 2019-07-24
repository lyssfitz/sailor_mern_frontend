import React, { Component } from "react";
import Moment from 'moment';
import PropTypes from 'prop-types';

// Ant.d components
import { Comment, Tooltip } from 'antd';


class UserComment extends Component {
  render() {
    const {authorFirstName, authorLastName, content, dateTime} = this.props;
    // console.log(this.props.dateTime);
    return (
      <Comment
        author={<h4>{authorFirstName.charAt(0).toUpperCase() + authorFirstName.slice(1)} {authorLastName.charAt(0).toUpperCase() + authorLastName.slice(1)}</h4>}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={dateTime.format("HH:mm ddd Do MMM, 'YY")}>
            <span>{dateTime.fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

UserComment.propTypes = {
  // authorName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Moment).isRequired
};

export default UserComment;