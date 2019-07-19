import React from 'react';
import { storiesOf } from '@storybook/react';
import UserCommentList from './UserCommentList.jsx'
import moment from 'moment';

const UserComments = [
  {
    authorName: "Mary Smith",
    content: "That was an excellent article!",
    dateTime: moment()
  },
  {
    authorName: "Frank Frankenstein",
    content: "Muahahahaha!",
    dateTime: moment().subtract(1, "day")
  },
  {
    authorName: "Sally Smithers",
    content: "This is a super original comment!",
    dateTime: moment().subtract(5, "days")
  }
];

storiesOf('UserCommentList', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('empty list', () => (
    <UserCommentList 
      userComments={[]}
    />
  ))
  .add('with one user comment', () => (
    <UserCommentList 
      userComments={[UserComments[0]]}
    />
  ))
  .add('with multiple user comments', () => (
    <UserCommentList 
      userComments={UserComments}
    />
  ))
;