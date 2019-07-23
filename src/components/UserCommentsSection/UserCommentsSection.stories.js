
import React from 'react';
import { storiesOf } from '@storybook/react';
import UserCommentsSection from './UserCommentsSection'
import { UserComments } from "../UserCommentList/UserCommentList.stories";
import { UserList} from "../UserCommentEditor/UserCommentEditor.stories";

const AuthorName = "Harry Potter";

storiesOf('UserCommentsSection', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('no comments', () => (
    <UserCommentsSection 
      authorName={AuthorName}
      commentList={[]}
      userList={UserList}
    />
  ))
  .add('with comments', () => (
    <UserCommentsSection 
      authorName={AuthorName}
      commentList={UserComments}
      userList={UserList}
    />
  ))
;