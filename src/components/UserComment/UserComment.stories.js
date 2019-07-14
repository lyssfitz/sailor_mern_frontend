import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserComment from 'components/UserComment/UserComment.jsx'

storiesOf('UserComment', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('default', () => (
    <UserComment/>
  ))
  .add('with entry', () => (
    <UserComment comment="This article is an execellent read"/>
  ))
  .add('with entry and mention', () => (
    <UserComment comment="@john I think you should read this"/>
  ))
;
