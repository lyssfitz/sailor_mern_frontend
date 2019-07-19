import React from 'react';
import { storiesOf } from '@storybook/react';
import UserComment from './UserComment.jsx'

const authorName = "Mary Smith";
const content = "That was an excellent article!";
const dateTime = moment();

storiesOf('UserComment', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('default', () => (
    <UserComment 
      authorName={authorName}  
      content={content}
      dateTime={dateTime}
    />
  ))
;