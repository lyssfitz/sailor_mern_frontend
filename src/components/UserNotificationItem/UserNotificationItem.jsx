import React, { Component } from "react";
import Moment from 'moment';
import PropTypes from 'prop-types';

// Ant.d components
import { Comment, Tooltip } from 'antd';

class UserNotificationItem extends Component {
  render() {
    const {content, dateTime} = this.props;
    return (
      <Comment
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

export default UserNotificationItem;