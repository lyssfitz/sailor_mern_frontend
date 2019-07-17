import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserComment from 'components/UserComment/UserComment.jsx'

const Users = [
  "afc163",
  "zombieJ",
  "yesmeck",
]

storiesOf('UserComment', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('default', () => (
    <UserComment/>
  ))
  .add('with entry', () => (
    <UserComment users={Users} comment="This article is an excellent read"/>
  ))

;
