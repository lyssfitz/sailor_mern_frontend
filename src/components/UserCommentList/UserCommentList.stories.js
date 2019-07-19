import React from 'react';
import { storiesOf } from '@storybook/react';
import UserCommentList from './UserCommentList.jsx'
import moment from 'moment';

storiesOf('UserCommentList', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('empty list', () => (
    <UserCommentList 
    />
  ))
  .add('with one user comment', () => (
    <UserCommentList 
    />
  ))
;