import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserCommentsSection from './UserCommentsSection'
import { UserComments } from "../UserCommentList/UserCommentList.stories";

storiesOf('UserCommentsSection', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('no comments', () => (
    <UserCommentsSection 
      userCommentData={[]}
    />
  ))
  .add('with comments', () => (
    <UserCommentsSection 
      userCommentData={UserComments}
    />
  ))
;