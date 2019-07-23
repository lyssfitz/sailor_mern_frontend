import React from 'react';
import { storiesOf } from '@storybook/react';
import UserNotificationItem from './UserNotificationItem'
import moment from 'moment';

const content = "John Doe mentioned you in a comment!";
const dateTime = moment();

storiesOf('UserNotificationItem', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('default', () => (
    <UserNotificationItem 
      content={content}
      dateTime={dateTime}
    />
  ))
;