import React, { Component } from "react";
import PropTypes from 'prop-types';


import { List } from 'antd';


import UserNotificationItem from 'components/UserNotificationItem/UserNotificationItem.jsx'
// Unused components for generating a list of user notifications
class UserNotificationList extends Component {

  getHeader() {
    const { userNotifications } = this.props;
    if (userNotifications) {
      if (userNotifications.length === 1) {
        return `${userNotifications.length} notification`
      }
      return `${userNotifications.length} notifications`
    }
    return ""
  }

  render() {
    const { userNotifications } = this.props;
    return (
      <List
        className="notification-list"
        header={this.getHeader()}
        itemLayout="horizontal"
        dataSource={userNotifications}
        renderItem={item => (
          <li>
            <UserNotificationItem
              content={item.content}
              dateTime={item.dateTime}
            />
          </li>
        )}
      />
    )
  }
}

// UserNotificationList.propTypes = {
//   userNotifications: PropTypes.array.isRequired,
// };

export default UserNotificationList;