import React from 'react';
import { storiesOf } from '@storybook/react';
import UserCommentList from './UserCommentList.jsx'
import moment from 'moment';

const UserComments = [
  {
    authorName: "Mary Smith",
    content: "That was an excellent article!",
    dateTime: moment()
  }
];

storiesOf('UserCommentList', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('empty list', () => (
    <UserCommentList 
      userComment={[]}
    />
  ))
  .add('with one user comment', () => (
    <UserCommentList 
      userComment={UserComments}
    />
  ))
  .add('with multiple user comments', () => (
    <UserCommentList 
    />
  ))
;