import React from 'react';
import { storiesOf } from '@storybook/react';
import UserNotificationList from './UserNotificationList.jsx'
import moment from 'moment';

export const UserNotifications = [
  {
    content: "Bob Jones mentioned you in an article!",
    dateTime: moment()
  },
  {
    content: "Karen Howard mentioned you in an article!",
    dateTime: moment().subtract(1, "day")
  },
  {
    content: "Ryan Thompson mentioned you in an article!",
    dateTime: moment().subtract(5, "days")
  }
];

storiesOf('UserNotificationsList', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('empty list', () => (
    <UserNotificationList 
      userNotifications={[]}
    />
  ))
  .add('with one notification', () => (
    <UserNotificationList 
      userNotifications={[UserNotifications[0]]}
    />
  ))
  .add('with multiple user notifications', () => (
    <UserNotificationList 
      userNotifications={UserNotifications}
    />
  ))
;