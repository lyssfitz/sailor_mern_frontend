import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserCommentsSection from './UserCommentsSection'
import { UserComments } from "../UserCommentList/UserCommentList.stories";

const AuthorName = "Harry Potter"

storiesOf('UserCommentsSection', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('no comments', () => (
    <UserCommentsSection 
      authorName={AuthorName}
      commentList={[]}
    />
  ))
  .add('with comments', () => (
    <UserCommentsSection 
      authorName={AuthorName}
      commentList={UserComments}
    />
  ))
;