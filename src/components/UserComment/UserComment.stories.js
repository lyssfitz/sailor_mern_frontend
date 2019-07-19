import React from 'react';
import { storiesOf } from '@storybook/react';
import UserComment from './UserComment.jsx'
import moment from 'moment';

const authorName = "Mary Smith";
const content = "That was an excellent article!";
const longContent = "Slap owner's face at 5am until human fills food dish at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in."
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
  .add('with long content', () => (
    <UserComment 
      authorName={authorName}  
      content={longContent}
      dateTime={dateTime}
    />
  ))
;