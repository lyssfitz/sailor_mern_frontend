import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserMention from 'components/UserMention/UserMention.jsx'

const Users = [
  "afc163",
  "zombieJ",
  "yesmeck",
]

storiesOf('UserMention', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('default', () => (
    <UserMention/>
  ))
  .add('with entry', () => (
    <UserMention users={Users} comment="This article is an excellent read"/>
  ))
  .add('with entry and mention', () => (
    <UserMention comment="@john I think you should read this"/>
  ))
;
